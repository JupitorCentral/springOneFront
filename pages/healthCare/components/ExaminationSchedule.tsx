// Examination schedule component for managing health examinations
import type React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getStatusColor } from "../utils/styleHelpers";
import type { Examination } from "./types";

interface ExaminationScheduleProps {
	examinations: Examination[];
}

/**
 * Examination schedule component for managing health examinations
 * Provides schedule view, calendar, and examination statistics
 */
const ExaminationSchedule: React.FC<ExaminationScheduleProps> = ({
	examinations,
}) => {
	// Calendar state management
	const [date, setDate] = useState<Date | undefined>(new Date());

	// Filter examinations for upcoming and overdue statuses
	const upcomingExaminations = examinations.filter(
		(exam) => exam.status === "Upcoming" || exam.status === "Overdue",
	);

	// Calculate examination statistics
	const calculateStatistics = () => {
		const upToDateCount = examinations.filter(
			(exam) => exam.status === "Up to date",
		).length;
		const upcomingCount = examinations.filter(
			(exam) => exam.status === "Upcoming",
		).length;
		const overdueCount = examinations.filter(
			(exam) => exam.status === "Overdue",
		).length;

		return { upToDateCount, upcomingCount, overdueCount };
	};

	const { upToDateCount, upcomingCount, overdueCount } =
		calculateStatistics();

	// Event handlers for examination actions
	const handleScheduleExamination = (examinationId: number) => {
		// TODO: Implement schedule examination logic
		console.log("Schedule examination:", examinationId);
	};

	const handleViewHistory = (examinationId: number) => {
		// TODO: Implement view history logic
		console.log("View history:", examinationId);
	};

	const handleScheduleNewExamination = () => {
		// TODO: Implement schedule new examination logic
		console.log("Schedule new examination");
	};

	const handleExportSchedule = () => {
		// TODO: Implement export functionality
		console.log("Export schedule");
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			{/* Main examination schedule table section */}
			<div className="lg:col-span-2">
				<div className="bg-white rounded-lg shadow overflow-hidden">
					{/* Header with search and export controls */}
					<div className="p-4 border-b border-gray-200">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold text-gray-800">
								Examination Schedule
							</h3>

							<div className="flex space-x-2">
								{/* Search input with icon */}
								<div className="relative w-64">
									<Input
										placeholder="Search examinations..."
										className="pl-10"
									/>
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<i className="fas fa-search text-gray-400"></i>
									</div>
								</div>

								{/* Export button */}
								<Button
									variant="outline"
									onClick={handleExportSchedule}
									className="!rounded-button whitespace-nowrap"
								>
									<i className="fas fa-download mr-2"></i>{" "}
									Export
								</Button>
							</div>
						</div>
					</div>

					{/* Examination data table with scrolling */}
					<ScrollArea className="h-[500px]">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Employee</TableHead>
									<TableHead>Hazard</TableHead>
									<TableHead>Last Exam</TableHead>
									<TableHead>Next Exam</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{examinations.map((exam) => (
									<TableRow key={exam.id}>
										<TableCell>
											{exam.employeeName}
										</TableCell>
										<TableCell>{exam.hazardName}</TableCell>
										<TableCell>
											{exam.lastExamDate}
										</TableCell>
										<TableCell>
											{exam.nextExamDate}
										</TableCell>
										<TableCell>
											<Badge
												className={getStatusColor(
													exam.status,
												)}
											>
												{exam.status}
											</Badge>
										</TableCell>
										<TableCell>
											{/* Action buttons for each examination */}
											<div className="flex space-x-2">
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														handleScheduleExamination(
															exam.id,
														)
													}
													className="text-blue-600 !rounded-button whitespace-nowrap"
												>
													<i className="fas fa-calendar-plus"></i>
												</Button>
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														handleViewHistory(
															exam.id,
														)
													}
													className="text-gray-600 !rounded-button whitespace-nowrap"
												>
													<i className="fas fa-history"></i>
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</ScrollArea>
				</div>
			</div>

			{/* Sidebar with calendar and statistics */}
			<div>
				{/* Calendar and upcoming examinations card */}
				<Card>
					<CardHeader>
						<CardTitle>Examination Calendar</CardTitle>
						<CardDescription>
							View upcoming examinations
						</CardDescription>
					</CardHeader>

					<CardContent>
						{/* Calendar widget */}
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							className="rounded-md border"
						/>

						{/* Upcoming examinations list */}
						<div className="mt-6 space-y-2">
							<h4 className="text-sm font-semibold text-gray-700">
								Upcoming Examinations
							</h4>

							<div className="space-y-2">
								{upcomingExaminations.map((exam) => (
									<div
										key={exam.id}
										className="p-3 bg-gray-50 rounded-md border border-gray-200"
									>
										<div className="flex justify-between items-start">
											<div>
												<p className="font-medium text-sm">
													{exam.employeeName}
												</p>
												<p className="text-xs text-gray-500">
													{exam.hazardName} -{" "}
													{exam.nextExamDate}
												</p>
											</div>
											<Badge
												className={getStatusColor(
													exam.status,
												)}
											>
												{exam.status}
											</Badge>
										</div>
									</div>
								))}
							</div>
						</div>
					</CardContent>

					<CardFooter className="flex justify-center">
						<Button
							variant="outline"
							onClick={handleScheduleNewExamination}
							className="w-full !rounded-button whitespace-nowrap"
						>
							<i className="fas fa-calendar-alt mr-2"></i>{" "}
							Schedule New Examination
						</Button>
					</CardFooter>
				</Card>

				{/* Statistics card */}
				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Examination Statistics</CardTitle>
						<CardDescription>
							Current status overview
						</CardDescription>
					</CardHeader>

					<CardContent>
						<div className="space-y-4">
							{/* Statistics breakdown with counts */}
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
									<span className="text-sm">Up to date</span>
								</div>
								<span className="font-medium">
									{upToDateCount}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
									<span className="text-sm">Upcoming</span>
								</div>
								<span className="font-medium">
									{upcomingCount}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
									<span className="text-sm">Overdue</span>
								</div>
								<span className="font-medium">
									{overdueCount}
								</span>
							</div>

							{/* Visual progress bar representation */}
							<div className="h-1 bg-gray-200 rounded-full mt-2">
								<div className="flex h-full rounded-full overflow-hidden">
									<div
										className="bg-green-500"
										style={{
											width: `${(upToDateCount / examinations.length) * 100}%`,
										}}
									></div>
									<div
										className="bg-yellow-500"
										style={{
											width: `${(upcomingCount / examinations.length) * 100}%`,
										}}
									></div>
									<div
										className="bg-red-500"
										style={{
											width: `${(overdueCount / examinations.length) * 100}%`,
										}}
									></div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default ExaminationSchedule;
