<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Sample UI</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                margin-top: 120px;
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            form {
                margin: 15px 0;
            }

            form select {
                padding: 5px;
                width: 190px;
                margin: 10px 0;
                font-size: 16px;
                border: 1px solid #ccc;
            }

            form select:focus {
                outline: 0 none;
            }

            button {
                display: block;
                margin: 15px auto auto;
                padding: 8px 18px;
                background: #333;
                color: #fff;
                font-family: sans-serif;
                border-radius: 5px;
                border: 1px solid #000;
                min-width: 160px;
            }
            button:hover {
                opacity: 0.75;
                cursor: pointer;
            }
            label {
                display: inline-block;
                width: 150px;
                margin-bottom: 10px;
                text-align: left;
            }
            input[type=text] {
                width: 180px;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 5px;
                color: #666;
                padding: 5px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref">

            <div class="content">
                <div class="title m-b-md">
                    Sample UI
                </div>
                <div id="powerUnitForm"></div>

            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
