-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2024 at 10:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ryonime`
--

-- --------------------------------------------------------

--
-- Table structure for table `collection`
--

CREATE TABLE `collection` (
  `id` int(11) NOT NULL,
  `anime_mal_id` varchar(191) NOT NULL,
  `user_email` varchar(191) NOT NULL,
  `anime_image` varchar(191) DEFAULT NULL,
  `anime_title` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `collection`
--

INSERT INTO `collection` (`id`, `anime_mal_id`, `user_email`, `anime_image`, `anime_title`) VALUES
(27, '5114', 'alhadivnr@gmail.com', 'https://cdn.myanimelist.net/images/anime/1208/94745.webp', 'Fullmetal Alchemist: Brotherhood'),
(28, '9253', 'alhadivnr@gmail.com', 'https://cdn.myanimelist.net/images/anime/1935/127974.webp', 'Steins;Gate');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `anime_mal_id` varchar(191) NOT NULL,
  `user_email` varchar(191) NOT NULL,
  `comment` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `anime_title` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `anime_mal_id`, `user_email`, `comment`, `username`, `anime_title`) VALUES
(2, '5114', 'alhadivnr@gmail.com', 'Ni film seru banget', 'Rio Agusto', 'Fullmetal Alchemist: Brotherhood'),
(3, '52991', 'alhadivnr@gmail.com', 'Keren', 'Rio Agusto', 'Sousou no Frieren'),
(4, '52991', 'alhadivnr@gmail.com', 'Rekomendasi Banget', 'Rio Agusto', 'Sousou no Frieren'),
(5, '52991', 'alhadivnr@gmail.com', 'Wow Animenya Bagus Banget', 'Rio Agusto', 'Sousou no Frieren'),
(6, '52991', 'alhadivnr@gmail.com', 'Anjay Grinjay', 'Rio Agusto', 'Sousou no Frieren');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('3a95a5cf-8325-4642-8ffd-c34e43b03071', 'ab4588240afdd235e576a41d357514d078b39c32a3f156ac1e370a909e5b91e3', '2024-07-04 14:08:00.622', '20240704140800_comment_model', NULL, NULL, '2024-07-04 14:08:00.603', 1),
('56b3b687-735e-4f09-a240-2dee75ea7c39', 'a8d2589c6c772ccbe4d13f8a92407f9f7de19518fe4b057b4782af54e6fd9b48', '2024-07-04 13:52:41.991', '20240704135241_modify_collection_model', NULL, NULL, '2024-07-04 13:52:41.974', 1),
('5a8bccbb-120b-4dad-87d6-1ae6bb8ede7c', 'daead88296cabbc1630488a3a3ce19ec399cf6e1b114a96789f6084f19572974', '2024-07-03 15:31:51.459', '20240703153151_initialization', NULL, NULL, '2024-07-03 15:31:51.424', 1),
('bcb052da-b429-4860-84c7-ebb2de1c84d2', '9d61aa85465093071b08699549bbe552bac00e73f5515d7ecea78b08bdef01d7', '2024-07-04 14:32:10.614', '20240704143210_add_title', NULL, NULL, '2024-07-04 14:32:10.604', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collection`
--
ALTER TABLE `collection`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Collection_user_email_anime_mal_id_key` (`user_email`,`anime_mal_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collection`
--
ALTER TABLE `collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
