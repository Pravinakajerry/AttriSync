$(document).ready(function(){
  const mainTextSelectors = $("[data-c-text-main]");
  const mainImgSelectors = $("[data-c-img-main]");
  const mainLinkSelectors = $("[data-c-href-main]");
  const contentMapping = {};
  const imgMapping = {};
  const linkMapping = {};

  // Handling Text Elements
  mainTextSelectors.each(function(){
    const mainContent = $(this).text();
    const dataValue = $(this).data("c-text-main");

    contentMapping[dataValue] = mainContent;
  });

  for(const dataValue in contentMapping){
    const content = contentMapping[dataValue];
    const connectedSelectors = $(`[data-c-text=${dataValue}]`);

    connectedSelectors.each(function(){
      $(this).text(content);
    });
  }

  // Handling Image Elements
  mainImgSelectors.each(function(){
    const mainSrc = $(this).attr('src');
    const dataValue = $(this).data("c-img-main");

    imgMapping[dataValue] = mainSrc;
  });

  for(const dataValue in imgMapping){
    const imgSrc = imgMapping[dataValue];
    const connectedSelectors = $(`[data-c-img=${dataValue}]`);

    connectedSelectors.each(function(){
      $(this).attr('src', imgSrc);
    });
  }

  // Handling Link Elements
  mainLinkSelectors.each(function(){
    const mainHref = $(this).attr('href');
    const dataValue = $(this).data("c-href-main");

    linkMapping[dataValue] = mainHref;
  });

  for(const dataValue in linkMapping){
    const linkHref = linkMapping[dataValue];
    const connectedSelectors = $(`[data-c-href=${dataValue}]`);

    connectedSelectors.each(function(){
      $(this).attr('href', linkHref);
    });
  }

  // Creating a mutation observer instance for text
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "characterData") {
        const targetElement = $(mutation.target.parentElement);
        if (targetElement.data("c-text-main")) {
          const mainContent = targetElement.text();
          const dataValue = targetElement.data("c-text-main");

          const connectedSelectors = $(`[data-c-text=${dataValue}]`);
          connectedSelectors.each(function(){
            $(this).text(mainContent);
          });
        }
      }
    });
  });

  mainTextSelectors.each(function(){
    observer.observe(this, { childList: true, subtree: true, characterData: true });
  });

  // Creating a mutation observer instance for images
  const observerImg = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "src") {
        const targetElement = $(mutation.target);
        if (targetElement.data("c-img-main")) {
          const mainSrc = targetElement.attr('src');
          const dataValue = targetElement.data("c-img-main");

          const connectedSelectors = $(`[data-c-img=${dataValue}]`);
          connectedSelectors.each(function(){
            $(this).attr('src', mainSrc);
          });
        }
      }
    });
  });

  mainImgSelectors.each(function(){
    observerImg.observe(this, { attributes: true, attributeFilter: ['src'] });
  });
});
