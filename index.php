<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>AngularJS - PHP/MySQL</title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
    </head>
    <body ng-app="myApp">

        <div class="container" style="margin-top: 50px;">
            <div class="panel panel-info">
                <div class="panel-heading">Panel heading</div>
                <div class="panel-body">                    

                    <div ng-view></div>

                </div>                
            </div>            
        </div>

        <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
        <script type="text/javascript" src="bower_components/angular-route/angular-route.min.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <!--<script type="text/javascript" src="js/main.js"></script>-->
    </body>
</html>
