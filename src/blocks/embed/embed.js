export default function decorate(block) {
  const [embedWrapper] = block.children;

  const outerWrapper = document.createElement('custom-element');

  // Setzen Sie den Inhalt des embedWrapper durch das custom-element
  embedWrapper.replaceChildren(outerWrapper);
}
