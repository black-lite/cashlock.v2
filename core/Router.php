<?php

	namespace Core;


	class Router
	{
		static array $routes;

		public function __construct()
		{
			Router::$routes = [];
		}

		public static function getRoute(string $route) : void
		{
			if (isset(Router::$routes[$route])) require Router::$routes[$route];
		}

		public static function setRoute(string $route, string $controller) : void
		{
			if (isset(Router::$routes[$route])) die("Route \"{$route}\" already exists!");
			Router::$routes[$route] = $controller;
		}
	}

	new Router();
