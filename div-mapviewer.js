fetch('https://stroly.com/viewer/1573198703/')
    .then((response) => {
        return response.text();
    })
    .then((body) => {
        const viewer = body.replace(/=\"\/static/gi, '="https://stroly.com/static');
        $('.outside-map').html(viewer);
    });
