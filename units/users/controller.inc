<?php

namespace Users
{
	use Core\Router;
	use const Config\CONTROLLERS;

	require __DIR__ . '/../../controllers.php';

	class Controller
	{
		public function __construct()
		{
			Router::setRoute('users', CONTROLLERS['users']);
		}
	}

	new Controller();
}