## Hướng dẫn load Bootstrap làm layout mặc định cho EJS

> cài đặt gói thư viện

`npm install express-ejs-layouts --save`

> gọi trong `app.js`

```javascript
const expressLayouts = require("express-ejs-layouts");
```

```javascript
// TODO: cấu hình cho views EJS
app.use(expressLayouts);
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
```

> Tạo thư mục file mặc định trong `views` => `layout.ejs`

#### Cấu hình Bootstrap trong `layout.ejs`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://bootswatch.com/4/journal/bootstrap.min.css"
    />
    <title>Node.js & Passport Login App</title>
  </head>

  <body>
    <div class="container"><%- body %></div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
      integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

> > Tự động `layout.ejs` sẽ load lên cùng với Bootstrap
