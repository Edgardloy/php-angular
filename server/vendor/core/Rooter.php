<?php 

class Router {
	
    protected static $routes = [];
    protected static $route = [];

    public static function add($regexp, $route = []) {
        self::$routes[$regexp] = $route;
    }

    public static function getRoutes() {
        return self::$routes;
    }

    public static function getRoute()
    {
        return self::$route;
    }

    public static function matchRoute($url) {
        foreach (self::$routes as $pattern => $route) {
            if (preg_match("#$pattern#i", $url, $matches)) {
                foreach ($matches as $key => $value) {
                    if(is_string($key)) {
                        $route[$key] = $value;
                    }
                }
                if(!isset($route['action'])) {
                    $route['action'] = 'index';
                }
                $route['controller'] = self::upperCamelCase($route['controller']);
                self::$route = $route;
                return true;
            }
        }
        return false;
    }
    
    public static function dispath($url) {
        if(self::matchRoute($url)) {
            $controller = 'app\\controllers\\' . self::$route['controller'];
            if(class_exists($controller)){
                $cObj = new $controller(self::$route);
                $action = self::lowerCamelCase(self::$route['action']) . 'Action';
                if(method_exists($cObj, $action)) {
                    $cObj->$action();
                } else {
                    echo "Method <b>$action</b> non existe";
                }
            } else {
                echo "Controller <b>$controller</b> non existe";
            }
        } else {
            http_response_code(404);
            include '404.html';
        }
    }
    
    protected static function upperCamelCase($name) {
        return str_replace(' ', '', ucwords(str_replace('-', ' ', $name)));
    }
    
    protected static function lowerCamelCase($name) {
        return lcfirst(self::upperCamelCase($name));
    }

}