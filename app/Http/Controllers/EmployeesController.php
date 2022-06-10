<?php

namespace App\Http\Controllers;

use App\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
// use Log;

class EmployeesController extends Controller
{
    //
    public function getEmployeeList()
    {
        try
        {
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function getEmployeeDetails(Request $request)
    {
        try
        {
            $employeesData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeesData);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
    
    public function updateEmployeeData(Request $request)
    {
        try
        {
            // dd($request->all());
            $employeeId     = $request->get('employeeId');
            $employeeName   = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');
            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary,
            ]);
            
            return response()->json([
                'employee_name' => $employeeName,
                'employee_salary' => $employeeSalary,
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function deleteEmployeeData(Employee $employee)
    {
        try
        {
            $employee->delete();
            return response()->json([
                'success' => true,
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function storeEmployeeData(Request $request)
    {
        try
        {
            $employeeName   = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::create([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary,
            ]);
            return response()->json([
                'success' => true,
                'employee_name' => $employeeName,
                'employee_salary' => $employeeSalary,
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
