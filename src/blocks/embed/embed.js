export default function decorate(block) {
  const [embedWrapper] = block.children;

  const outerWrapper = document.createElement('div');
  outerWrapper.className = 'ex-embed';

  outerWrapper.innerHTML = embedWrapper.textContent;
  embedWrapper.replaceChildren(outerWrapper);

  const scripts = outerWrapper.querySelectorAll('script');
  scripts.forEach((oldScript) => {
    const newScript = document.createElement('script');
    newScript.textContent = oldScript.textContent;

    // Copy attributes
    for (const attr of oldScript.attributes) {
      newScript.setAttribute(attr.name, attr.value);
    }

    // Replace old script with new script to execute it
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
