<?php

	function send_json(mixed $value)
	{
		header('Content-Type: application/json; charset=utf-8');
		die(json_encode($value));
	}