CREATE TABLE `news_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`source` varchar(255) NOT NULL,
	`summary` text NOT NULL,
	`fullContent` text NOT NULL,
	`category` varchar(100) NOT NULL,
	`url` text NOT NULL,
	`publishedDate` timestamp NOT NULL,
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`feedSource` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `news_items_id` PRIMARY KEY(`id`)
);
