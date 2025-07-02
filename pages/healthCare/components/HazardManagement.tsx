// Hazard management component for managing hazardous factors
import type React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
import { getRiskLevelColor } from "../utils/styleHelpers";
import type { Hazard } from "./types";

interface HazardManagementProps {
	hazards: Hazard[];
}

/**
 * Hazard management component for managing hazardous factors
 * Displays hazards in a card layout with add/edit/delete functionality
 */
const HazardManagement: React.FC<HazardManagementProps> = ({ hazards }) => {
	// Dialog state management
	const [addHazardDialogOpen, setAddHazardDialogOpen] = useState(false);

	// Hazard form action handlers
	const handleAddHazard = () => {
		// TODO: Implement add hazard logic with form validation
		setAddHazardDialogOpen(false);
	};

	const handleEditHazard = (hazardId: number) => {
		// TODO: Implement edit hazard logic
		console.log("Edit hazard:", hazardId);
	};

	const handleDeleteHazard = (hazardId: number) => {
		// TODO: Implement delete hazard logic with confirmation
		console.log("Delete hazard:", hazardId);
	};

	return (
		<div className="space-y-6">
			{/* Header section with title and add hazard button */}
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold text-gray-800">
					Hazardous Factors
				</h3>

				<Dialog
					open={addHazardDialogOpen}
					onOpenChange={setAddHazardDialogOpen}
				>
					<DialogTrigger asChild>
						<Button className="!rounded-button whitespace-nowrap">
							<i className="fas fa-plus mr-2"></i> Add New Hazard
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Hazardous Factor</DialogTitle>
							<DialogDescription>
								Enter the details of the new hazardous factor
								below.
							</DialogDescription>
						</DialogHeader>

						{/* Hazard form input fields */}
						<div className="grid gap-4 py-4">
							{/* Hazard name field */}
							<div className="space-y-2">
								<Label htmlFor="hazardName">Hazard Name</Label>
								<Input
									id="hazardName"
									placeholder="Enter hazard name"
								/>
							</div>

							{/* Risk level selection */}
							<div className="space-y-2">
								<Label htmlFor="riskLevel">Risk Level</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select risk level" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="high">
											High
										</SelectItem>
										<SelectItem value="medium">
											Medium
										</SelectItem>
										<SelectItem value="low">Low</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* Examination frequency selection */}
							<div className="space-y-2">
								<Label htmlFor="examFrequency">
									Examination Frequency
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select frequency" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="monthly">
											Monthly
										</SelectItem>
										<SelectItem value="quarterly">
											Every 3 months
										</SelectItem>
										<SelectItem value="biannual">
											Every 6 months
										</SelectItem>
										<SelectItem value="annual">
											Annual
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* Examination protocol field */}
							<div className="space-y-2">
								<Label htmlFor="protocol">
									Examination Protocol
								</Label>
								<Input
									id="protocol"
									placeholder="Enter examination protocol"
								/>
							</div>
						</div>

						{/* Dialog action buttons */}
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setAddHazardDialogOpen(false)}
								className="!rounded-button whitespace-nowrap"
							>
								Cancel
							</Button>
							<Button
								onClick={handleAddHazard}
								className="!rounded-button whitespace-nowrap"
							>
								Add Hazard
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			{/* Hazards display grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{hazards.map((hazard) => (
					<Card key={hazard.id} className="overflow-hidden">
						{/* Hazard card header with name and risk level badge */}
						<CardHeader className="pb-2">
							<div className="flex justify-between items-start">
								<CardTitle>{hazard.name}</CardTitle>
								<Badge
									className={getRiskLevelColor(
										hazard.riskLevel,
									)}
								>
									{hazard.riskLevel} Risk
								</Badge>
							</div>
						</CardHeader>

						{/* Hazard details and information */}
						<CardContent className="pt-2">
							<div className="space-y-3">
								{/* Examination frequency display */}
								<div className="flex justify-between">
									<span className="text-sm font-medium text-gray-500">
										Examination Frequency:
									</span>
									<span className="text-sm text-gray-700">
										{hazard.examFrequency}
									</span>
								</div>

								{/* Protocol information display */}
								<div className="flex justify-between">
									<span className="text-sm font-medium text-gray-500">
										Protocol:
									</span>
									<span className="text-sm text-gray-700">
										{hazard.protocol}
									</span>
								</div>
							</div>
						</CardContent>

						{/* Action buttons for each hazard */}
						<CardFooter className="border-t pt-4 flex justify-end space-x-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => handleEditHazard(hazard.id)}
								className="!rounded-button whitespace-nowrap"
							>
								<i className="fas fa-edit mr-1"></i> Edit
							</Button>
							<Button
								variant="outline"
								size="sm"
								onClick={() => handleDeleteHazard(hazard.id)}
								className="text-red-600 border-red-200 hover:bg-red-50 !rounded-button whitespace-nowrap"
							>
								<i className="fas fa-trash-alt mr-1"></i> Delete
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default HazardManagement;
