// Employee management component for CRUD operations on employees
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Employee } from "./types";

interface EmployeeManagementProps {
	employees: Employee[];
}

/**
 * Employee management component that handles employee CRUD operations
 * Provides employee directory with search, filter, and add functionality
 */
const EmployeeManagement: React.FC<EmployeeManagementProps> = ({
	employees,
}) => {
	// Dialog state management
	const [addEmployeeDialogOpen, setAddEmployeeDialogOpen] = useState(false);

	// Employee form action handlers
	const handleAddEmployee = () => {
		// TODO: Implement add employee logic with form validation
		setAddEmployeeDialogOpen(false);
	};

	const handleDeleteEmployee = (employeeId: string) => {
		// TODO: Implement delete employee logic with confirmation
		console.log("Delete employee:", employeeId);
	};

	const handleEditEmployee = (employeeId: string) => {
		// TODO: Implement edit employee logic
		console.log("Edit employee:", employeeId);
	};

	const handleExportEmployees = () => {
		// TODO: Implement export functionality
		console.log("Export employees");
	};

	return (
		<div className="space-y-6">
			{/* Header section with title and add employee button */}
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold text-gray-800">
					Employee Directory
				</h3>

				<Dialog
					open={addEmployeeDialogOpen}
					onOpenChange={setAddEmployeeDialogOpen}
				>
					<DialogTrigger asChild>
						<Button className="!rounded-button whitespace-nowrap">
							<i className="fas fa-plus mr-2"></i> Add New
							Employee
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Employee</DialogTitle>
							<DialogDescription>
								Enter the details of the new employee below.
							</DialogDescription>
						</DialogHeader>

						{/* Employee form input fields */}
						<div className="grid gap-4 py-4">
							{/* Name fields in a row */}
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">
										First Name
									</Label>
									<Input
										id="firstName"
										placeholder="Enter first name"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										placeholder="Enter last name"
									/>
								</div>
							</div>

							{/* Email field */}
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter email address"
								/>
							</div>

							{/* Department and position fields in a row */}
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="department">
										Department
									</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select department" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="laboratory">
												Laboratory
											</SelectItem>
											<SelectItem value="research">
												Research
											</SelectItem>
											<SelectItem value="production">
												Production
											</SelectItem>
											<SelectItem value="maintenance">
												Maintenance
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="position">Position</Label>
									<Input
										id="position"
										placeholder="Enter position"
									/>
								</div>
							</div>

							{/* Start date field */}
							<div className="space-y-2">
								<Label htmlFor="startDate">Start Date</Label>
								<Input id="startDate" type="date" />
							</div>
						</div>

						{/* Dialog action buttons */}
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setAddEmployeeDialogOpen(false)}
								className="!rounded-button whitespace-nowrap"
							>
								Cancel
							</Button>
							<Button
								onClick={handleAddEmployee}
								className="!rounded-button whitespace-nowrap"
							>
								Add Employee
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			{/* Employee table with search and filter controls */}
			<div className="bg-white rounded-lg shadow overflow-hidden">
				{/* Search and filter toolbar */}
				<div className="p-4 border-b border-gray-200">
					<div className="flex items-center justify-between">
						{/* Search input with icon */}
						<div className="relative w-64">
							<Input
								placeholder="Search employees..."
								className="pl-10"
							/>
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<i className="fas fa-search text-gray-400"></i>
							</div>
						</div>

						{/* Filter and export controls */}
						<div className="flex space-x-2">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Filter by department" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Departments
									</SelectItem>
									<SelectItem value="laboratory">
										Laboratory
									</SelectItem>
									<SelectItem value="research">
										Research
									</SelectItem>
									<SelectItem value="production">
										Production
									</SelectItem>
									<SelectItem value="maintenance">
										Maintenance
									</SelectItem>
								</SelectContent>
							</Select>

							<Button
								variant="outline"
								onClick={handleExportEmployees}
								className="!rounded-button whitespace-nowrap"
							>
								<i className="fas fa-download mr-2"></i> Export
							</Button>
						</div>
					</div>
				</div>

				{/* Employee data table */}
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Position</TableHead>
							<TableHead>Start Date</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{employees.map((employee) => (
							<TableRow key={employee.id}>
								<TableCell className="font-medium">
									{employee.id}
								</TableCell>
								<TableCell>{employee.name}</TableCell>
								<TableCell>{employee.department}</TableCell>
								<TableCell>{employee.position}</TableCell>
								<TableCell>{employee.startDate}</TableCell>
								<TableCell>
									{/* Action buttons for each employee */}
									<div className="flex space-x-2">
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												handleEditEmployee(employee.id)
											}
											className="text-blue-600 !rounded-button whitespace-nowrap"
										>
											<i className="fas fa-edit"></i>
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												handleDeleteEmployee(
													employee.id,
												)
											}
											className="text-red-600 !rounded-button whitespace-nowrap"
										>
											<i className="fas fa-trash-alt"></i>
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				{/* Pagination controls */}
				<div className="p-4 border-t border-gray-200 flex items-center justify-between">
					<div className="text-sm text-gray-500">
						Showing 1-{employees.length} of {employees.length}{" "}
						employees
					</div>
					<div className="flex space-x-2">
						<Button
							variant="outline"
							size="sm"
							disabled
							className="!rounded-button whitespace-nowrap"
						>
							<i className="fas fa-chevron-left mr-1"></i>{" "}
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							disabled
							className="!rounded-button whitespace-nowrap"
						>
							Next <i className="fas fa-chevron-right ml-1"></i>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeeManagement;
