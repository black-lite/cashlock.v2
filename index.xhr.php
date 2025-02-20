<?php

	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	require __DIR__ . '/core/functions.php';

//	require __DIR__ . '/core/Router.php';
//	require __DIR__ . '/units/common/base.php';
//	require __DIR__ . '/units/users/base.php';

	$exploded = explode('/', $_SERVER['REQUEST_URI']);
	if ($exploded[0] == '') array_splice($exploded, 0, 1);

	if ($exploded[0] !== 'xhr') { header('HTTP/1.0 404'); die(); }
	array_splice($exploded, 0, 1);

	$rule = ['users', ':id'];
	$count_rules = count($rule);
	if (count($exploded) !== $count_rules) send_json(['state' => 'error', 'message' => "Ожидалось другое количество параметров ({$count_rules})" ]);

	foreach ($rule as $key => $item)
	{
		if ($item == ':id' && !preg_match('/[0-9]/', $exploded[$key])) send_json(['state' => 'error', 'message' => 'Цифры не найдены']);
		else if ($item == ':id' && !preg_match('/[0-9]/', $exploded[$key])) send_json(['state' => 'error', 'message' => 'Цифры не найдены']);
	}

	header('HTTP/1.0 403 Forbidden');