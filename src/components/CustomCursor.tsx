import { useEffect, useState } from 'react';

interface CustomCursorProps {
  size?: number;
  trailLength?: number;
}

const CustomCursor = ({ size = 32, trailLength = 8 }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      setPosition({ x: cursorX, y: cursorY });

      // Update trail
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: cursorX, y: cursorY }];
        return newTrail.slice(-trailLength);
      });

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [role="button"], [tabindex]'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [trailLength]);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-60'
        }`}
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-300 ${
            isHovering
              ? 'bg-primary/20 border-2 border-primary shadow-lg shadow-primary/30'
              : 'bg-primary/10 border border-primary/30'
          }`}
        />
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary/5 border border-primary/20 transition-all duration-100"
          style={{
            left: point.x - (size * 0.3) / 2,
            top: point.y - (size * 0.3) / 2,
            width: size * 0.3,
            height: size * 0.3,
            opacity: (index / trail.length) * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
