function updatePage() {
  const mappings = {
    "angular app title": "Hello World!"
  };
  
  const elems = document.querySelectorAll('span[copy]');
  elems.forEach(elem => {
    const mappingKey = elem.attributes.getNamedItem("copy").value;
    elem.textContent = mappings[mappingKey];
  })
}

window.onload = updatePage;
