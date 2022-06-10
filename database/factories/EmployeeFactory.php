<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
// use Illuminate\Database\Eloquent\Factories\Factory;
use App\Employee;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'employee_name' => $faker->name,
        'salary'        => $faker->numberBetween(50000, 500000),
    ];
});
