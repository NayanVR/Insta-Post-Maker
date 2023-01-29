exports.getHtml = (content) => {

    const contentHtml = content.map((item) => `<p class="content">${item}</p>`).join('');

    return `
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
        <div class="main-container">
            <div class="profile-container">
                <img src="{{imageSource}}" />
                <div class="profile-info">
                    <h2>Shit Shashtra</h2>
                    <h3>@shitshashtra</h3>
                </div>
            </div>
            ${contentHtml}
        </div>
        </body>
        </html>
    `;
};

const css = `
  body {
    width: 1000px;
    height: 1000px;
    /* Base */
    margin: 0;
    padding: 0;
    font-size: 32px;
  }

  .main-container {
    width: 100%;
    height: 100%;
    background-color: #070707;
    color: white;
    /* Base */
    padding: 0 15%;
    gap: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .profile-container {
    height: 15%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5%;
  }

  .profile-container img {
    height: 100%;
    border-radius: 30%;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
  }

  .profile-info h2 {
    margin: 0;
  }

  .profile-info h3 {
    color: gray;
    /* Base */
    margin: 0;
    font-weight: normal;
  }

  .content {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`