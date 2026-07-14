import { useEffect, useState } from "react";

const TextType = ({
  text,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
  loop = true,
  className = "",
  cursor = true,
}) => {
  const texts = Array.isArray(text) ? text : [text];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          if (loop || textIndex < texts.length - 1) {
            setIsDeleting(true);
          }
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>

      {cursor && <span className="ml-1 animate-pulse font-light">|</span>}
    </div>
  );
};

export default TextType;
