export default function useMakerColor() {
  const logger = (text, { background, color }) => {
    console.groupCollapsed(
      `%c${text}`,
      `background-color: ${background}; color: ${color}; padding: 2px 4px;`
    );
    console.info(
      new Error("stack").stack
        .split("\n")
        .slice(2)
        .join("\n")
    );
    console.groupEnd();
  }
  
  return [logger]
}