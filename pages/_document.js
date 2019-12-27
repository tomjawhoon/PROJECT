import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from '@material-ui/core/styles';
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/static/plugins/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
                    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="/front/css/tranfer.css"></link>
                    <link href="/front/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
                    <link href="/front/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />
                    <link href="/front/css/creative.min.css" rel="stylesheet" />

          
                    <script src="static/plugins/jquery/jquery.min.js"></script>
                    <script src="static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="static/dist/js/adminlte.js"></script>
                    <script src="/static/dist/css/tranfer.css" ></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

                    <script src="static/plugins/chart.js/Chart.min.js"></script>
                    <script src="static/dist/js/demo.js"></script>
                    <script src="static/dist/js/pages/dashboard3.js"></script>



                    <script src="/front/vendor/jquery/jquery.min.js"></script>
                    <script src="/front/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


                    <script src="/front/vendor/jquery-easing/jquery.easing.min.js"></script>
                    <script src="/front/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
                    <script src="/front/js/creative.min.js"></script>
                    <script src="./web3.min.js"></script>
                    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
                </Head>

                <body className="hold-transition sidebar-mini">
                    <Main />
                    <NextScript />

                </body>
            </html>
        )

    }
}