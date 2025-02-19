<?php

namespace Common
{
	use Core\Router;
	use const Config\CONTROLLERS;

	require __DIR__ . '/../../controllers.php';

	class Controller
	{
		public function __construct()
		{
			Router::setRoute('common', CONTROLLERS['common']);
		}
	}

	new Controller();
}