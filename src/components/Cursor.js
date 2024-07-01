import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailingRefs = useRef([]);
  const positions = useRef(Array(6).fill({ x: 0, y: 0 })); // One extra for the main cursor

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      positions.current[0] = { x, y }; // Update main cursor position
    };

    const animate = () => {
      positions.current = positions.current.map((pos, index) => {
        if (index === 0) return pos; // Skip the main cursor

        const leader = positions.current[index - 1];
        const newPos = {
          x: pos.x + (leader.x - pos.x) * 0.1,
          y: pos.y + (leader.y - pos.y) * 0.1,
        };

        return newPos;
      });

      positions.current.forEach((pos, index) => {
        if (index === 0 && cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        } else if (trailingRefs.current[index - 1]) {
          trailingRefs.current[index - 1].style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <CursorDot ref={cursorRef} />
      {[...Array(5)].map((_, index) => (
        <TrailingDot
          key={index}
          ref={(el) => (trailingRefs.current[index] = el)}
          style={{ transitionDuration: `${0.05 + index * 0.01}s` }}
        />
      ))}
    </>
  );
};

const CursorDot = styled.div`
  width: 3px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
`;

const TrailingDot = styled.div`
  width: 3px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.1s ease-out;
`;

export default Cursor;
