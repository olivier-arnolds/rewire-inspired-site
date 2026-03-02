CREATE TABLE `webinar_attendees` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(255) NOT NULL,
	`lastName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`company` varchar(255),
	`jobTitle` varchar(255),
	`linkedinUrl` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `webinar_attendees_id` PRIMARY KEY(`id`)
);
