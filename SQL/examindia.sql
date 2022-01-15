-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2020 at 07:26 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `examindia`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressId` int(11) NOT NULL,
  `entityType` varchar(255) DEFAULT NULL,
  `entityId` int(11) DEFAULT NULL,
  `addressLine1` varchar(255) DEFAULT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `cityVillageTown` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL DEFAULT 'India',
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressId`, `entityType`, `entityId`, `addressLine1`, `addressLine2`, `cityVillageTown`, `state`, `district`, `pincode`, `country`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 3, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-24 09:15:01.191117', '2020-04-30 11:42:55.000000'),
(2, 'scholarship', 1, '#1231', NULL, 'Indiranagar', 'Karnataka', 'bangalore', '5600022', 'India', '2020-04-24 09:15:52.621442', '2020-04-24 09:15:52.621442'),
(3, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-24 09:46:38.753948', '2020-04-30 11:32:05.000000'),
(4, 'scholarship', 2, 'sdkjfkl', NULL, 'dsjlfjksdjfk', 'Haryana', 'dskjflksj', '560038', 'India', '2020-04-24 09:47:39.426843', '2020-04-24 09:47:39.426843'),
(5, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 04:01:48.836019', '2020-04-30 11:32:05.000000'),
(6, 'scholarship', 3, 'Goria ', NULL, 'Goria', 'Haryana', 'Jhajjar', '124142', 'India', '2020-04-25 04:03:28.303535', '2020-04-25 04:03:28.303535'),
(7, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 08:02:46.462374', '2020-04-30 11:32:05.000000'),
(8, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 17:21:10.096352', '2020-04-30 11:32:05.000000'),
(9, 'scholarship', 4, 'dsfsd', NULL, 'dsfd', 'sdfsdf', 'dfsdf', 'dfs', 'India', '2020-04-25 17:22:44.546469', '2020-04-25 17:22:44.546469'),
(10, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 21:14:03.884909', '2020-04-30 11:32:05.000000'),
(11, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 21:47:28.745988', '2020-04-30 11:32:05.000000'),
(12, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 22:59:50.189057', '2020-04-30 11:32:05.000000'),
(13, 'scholarship', 5, 'Kulgam', NULL, 'Kulgam', 'Jammu and Kashmir', 'Kulgam', '192231', 'India', '2020-04-25 23:02:07.458229', '2020-04-25 23:02:07.458229'),
(14, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-25 23:28:39.099218', '2020-04-30 11:32:05.000000'),
(15, 'scholarship', 6, 'Hayaghat Darbhanga', NULL, 'Hayaghat', 'Bihar', 'Darbhanga', '847301', 'India', '2020-04-25 23:29:57.191594', '2020-04-25 23:29:57.191594'),
(16, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 01:47:43.882654', '2020-04-30 11:32:05.000000'),
(17, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 03:45:14.033701', '2020-04-30 11:32:05.000000'),
(18, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 04:42:36.169953', '2020-04-30 11:32:05.000000'),
(19, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 04:43:39.492807', '2020-04-30 11:32:05.000000'),
(20, 'scholarship', 7, 'Drugmulla Kupwara ', NULL, 'Drugmulla Kupwara ', 'Jammu and Kashmir ', 'Kupwara ', '193222 ', 'India', '2020-04-26 04:43:52.194279', '2020-04-26 04:43:52.194279'),
(21, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 05:04:12.065231', '2020-04-30 11:32:05.000000'),
(22, 'scholarship', 8, 'H no 13 ', NULL, 'Subhash nagar, old press colony', 'Haryana ', 'Faridabad', '121005', 'India', '2020-04-26 05:05:19.687235', '2020-04-26 05:05:19.687235'),
(23, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 05:21:08.109505', '2020-04-30 11:32:05.000000'),
(24, 'scholarship', 9, 'Gole Market, Jammu', NULL, 'Jammu', 'Jammu&kashmir', 'Jammu', '180004', 'India', '2020-04-26 05:22:43.202697', '2020-04-26 05:22:43.202697'),
(25, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 05:25:40.056819', '2020-04-30 11:32:05.000000'),
(26, 'scholarship', 10, 'Indira nagar', NULL, 'Dehradun', 'Uttrakhand', 'Dehradun', '248006', 'India', '2020-04-26 05:26:41.177757', '2020-04-26 05:26:41.177757'),
(27, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 07:27:47.352002', '2020-04-30 11:32:05.000000'),
(28, 'scholarship', 11, 'JjJnShjsjj', NULL, 'Pundri', 'Haryana', 'Kaithal', '136026', 'India', '2020-04-26 07:29:18.365631', '2020-04-26 07:29:18.365631'),
(29, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 07:54:03.628457', '2020-04-30 11:32:05.000000'),
(30, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 07:55:35.122145', '2020-04-30 11:32:05.000000'),
(31, 'scholarship', 12, 'gfddfghfhh', NULL, 'delhi', 'delhi', 'dehi', '110092', 'India', '2020-04-26 07:57:24.902826', '2020-04-26 07:57:24.902826'),
(32, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 08:47:38.894419', '2020-04-30 11:32:05.000000'),
(33, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 09:49:22.525122', '2020-04-30 11:32:05.000000'),
(34, 'scholarship', 13, 'goria', NULL, 'goria', 'haryana', 'jhajjar', '124142', 'India', '2020-04-26 09:50:21.379333', '2020-04-26 09:50:21.379333'),
(35, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 10:02:36.081452', '2020-04-30 11:32:05.000000'),
(36, 'scholarship', 14, 'Kohandour', NULL, 'Kohandour', 'Uttar Pradesh', 'Pratapgarh', '230401', 'India', '2020-04-26 10:05:27.429141', '2020-04-26 10:05:27.429141'),
(37, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 16:50:11.372077', '2020-04-30 11:32:05.000000'),
(38, 'scholarship', 15, 'Nilmoni Road Karimganj', NULL, 'Karimganj', 'Assam', 'Karimganj', '788720', 'India', '2020-04-26 16:51:17.924421', '2020-04-26 16:51:17.924421'),
(39, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 22:58:58.446562', '2020-04-30 11:32:05.000000'),
(40, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-26 23:52:44.288484', '2020-04-30 11:32:05.000000'),
(41, 'scholarship', 16, 'K?pwarã', NULL, 'Halmatpora', 'Jammu and Kashmir', 'K?pwarã', '193222', 'India', '2020-04-26 23:54:05.912744', '2020-04-26 23:54:05.912744'),
(42, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 00:51:29.241995', '2020-04-30 11:32:05.000000'),
(43, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 02:40:39.946926', '2020-04-30 11:32:05.000000'),
(44, 'scholarship', 17, 'Nazreth ', NULL, 'Aluva', 'Kerala', 'Ernakulam', '683101', 'India', '2020-04-27 03:02:37.998630', '2020-04-27 03:02:37.998630'),
(45, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 03:18:42.054308', '2020-04-30 11:32:05.000000'),
(46, 'scholarship', 18, 'Seventh Day Adventist H.S.S', NULL, 'Kaloor', 'Kerala', 'Ernakulam', '682017', 'India', '2020-04-27 03:20:34.206744', '2020-04-27 03:20:34.206744'),
(47, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 05:05:56.192722', '2020-04-30 11:32:05.000000'),
(48, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 06:04:37.040658', '2020-04-30 11:32:05.000000'),
(49, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 06:30:48.758371', '2020-04-30 11:32:05.000000'),
(50, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 07:08:05.981686', '2020-04-30 11:32:05.000000'),
(51, 'scholarship', 19, 'SSF chouraha kansuwa kota ', NULL, 'kota Rajasthan DCM', 'Rajasthan', 'kota', '324004', 'India', '2020-04-27 07:10:17.486265', '2020-04-27 07:10:17.486265'),
(52, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 07:16:45.304415', '2020-04-30 11:32:05.000000'),
(53, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 07:55:58.514577', '2020-04-30 11:32:05.000000'),
(54, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 08:13:53.728990', '2020-04-30 11:32:05.000000'),
(55, 'scholarship', 20, 'PRONGROO MAWER HANDWARA', NULL, 'KUPWARA', 'Jammu and Kashmir', 'KUPWARA', '193302', 'India', '2020-04-27 08:15:17.861358', '2020-04-27 08:15:17.861358'),
(56, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 08:39:51.927248', '2020-04-30 11:32:05.000000'),
(57, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 09:17:44.487554', '2020-04-30 11:32:05.000000'),
(58, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 09:20:46.597824', '2020-04-30 11:32:05.000000'),
(59, 'scholarship', 21, 'Bandipora', NULL, 'Bandipora', 'Kashmir', 'Bandipora', '193502', 'India', '2020-04-27 09:23:46.759781', '2020-04-27 09:23:46.759781'),
(60, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 09:26:43.327507', '2020-04-30 11:32:05.000000'),
(61, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 09:37:29.886660', '2020-04-30 11:32:05.000000'),
(62, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 10:46:57.907637', '2020-04-30 11:32:05.000000'),
(63, 'scholarship', 22, 'Khjwana road ,marwar mundwa ', NULL, 'Marwar mundwa ', 'Rajasthan', 'Naguar', '341026', 'India', '2020-04-27 10:48:36.963438', '2020-04-27 10:48:36.963438'),
(64, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 13:36:12.082572', '2020-04-30 11:32:05.000000'),
(65, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 13:36:41.318285', '2020-04-30 11:32:05.000000'),
(66, 'scholarship', 23, 'Parri ', NULL, 'Darbhanga/parri/biraul', 'Bihar ', 'Darbhanga ', '847203', 'India', '2020-04-27 13:37:49.498482', '2020-04-27 13:37:49.498482'),
(67, 'scholarship', 24, 'Wangipora12', NULL, 'Sumbal', 'Jandk', 'Bandipora', '193501', 'India', '2020-04-27 13:38:16.510024', '2020-04-27 13:38:16.510024'),
(68, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 16:46:44.612095', '2020-04-30 11:32:05.000000'),
(69, 'scholarship', 25, 'KULLAR PAHALGAM ', NULL, 'SRINAGAR ', 'JAMMU AND KASHMIR', 'ANANTNAG', '192401', 'India', '2020-04-27 16:48:49.082356', '2020-04-27 16:48:49.082356'),
(70, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 18:42:00.778941', '2020-04-30 11:32:05.000000'),
(71, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-27 22:54:54.747663', '2020-04-30 11:32:05.000000'),
(72, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 01:40:07.475771', '2020-04-30 11:32:05.000000'),
(73, 'scholarship', 26, 'At-Baincha, po-sergarh', NULL, 'Baincha, sergarh', 'Odisha', 'Balasore', '756060', 'India', '2020-04-28 01:41:21.216412', '2020-04-28 01:41:21.216412'),
(74, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 01:44:08.336902', '2020-04-30 11:32:05.000000'),
(75, 'scholarship', 27, 'Odisha, Kendrapara,aul,jenavali', NULL, 'Kendrapara', 'Radhamadhab temple', 'Kendrapara', '754239', 'India', '2020-04-28 01:47:22.188352', '2020-04-28 01:47:22.188352'),
(76, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 03:34:18.151223', '2020-04-30 11:32:05.000000'),
(77, 'scholarship', 28, 'Wadwan', NULL, 'Budgam', 'J & k', 'Budgam', '193411', 'India', '2020-04-28 03:36:39.603884', '2020-04-28 03:36:39.603884'),
(78, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 03:47:38.765024', '2020-04-30 11:32:05.000000'),
(79, 'scholarship', 29, 'Jhanjharpur ', NULL, 'Madhubani, berma  jhanjharpur ', 'Bihar ', 'Madhubani ', '847414', 'India', '2020-04-28 03:50:05.242551', '2020-04-28 03:50:05.242551'),
(80, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 04:13:41.231099', '2020-04-30 11:32:05.000000'),
(81, 'scholarship', 30, 'Debpukur, Sewli Telinipara', NULL, 'Barrackpore', 'West Bengal', 'North 24 Parganas', '700121', 'India', '2020-04-28 04:21:30.849697', '2020-04-28 04:21:30.849697'),
(82, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 05:26:55.780998', '2020-04-30 11:32:05.000000'),
(83, 'scholarship', 31, 'Birpara college para', NULL, 'College para', 'Birpara', 'Alipurduar', '735204', 'India', '2020-04-28 05:29:42.777075', '2020-04-28 05:29:42.777075'),
(84, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 06:03:40.408606', '2020-04-30 11:32:05.000000'),
(85, 'scholarship', 32, 'Belpada', NULL, 'Belpada', 'Odisha', 'Bolangir', '767026', 'India', '2020-04-28 06:04:35.845775', '2020-04-28 06:04:35.845775'),
(86, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 06:07:09.904749', '2020-04-30 11:32:05.000000'),
(87, 'scholarship', 33, 'BA-163, Sector-1, Salt Lake City', NULL, 'Kolkata', 'West Bengal', 'North 24 Parganas', '700064', 'India', '2020-04-28 06:07:57.633701', '2020-04-28 06:07:57.633701'),
(88, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 06:12:13.298577', '2020-04-30 11:32:05.000000'),
(89, 'scholarship', 34, 'Mirhama', NULL, 'Kulgam mirhama kulgam', 'Kulgam', 'Kulgam', '192231', 'India', '2020-04-28 06:15:07.551981', '2020-04-28 06:15:07.551981'),
(90, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 06:26:38.628968', '2020-04-30 11:32:05.000000'),
(91, 'scholarship', 35, 'Ratnam school', NULL, 'Pidatapoluru', 'Andhrapradesh', 'Nellore', '12345', 'India', '2020-04-28 06:28:07.567963', '2020-04-28 06:28:07.567963'),
(92, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 06:34:36.333254', '2020-04-30 11:32:05.000000'),
(93, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 07:11:18.289777', '2020-04-30 11:32:05.000000'),
(94, 'scholarship', 36, 'Burgoo', NULL, 'Jammu and Kashmir ', 'J and k', 'Budgam', '191111', 'India', '2020-04-28 07:13:34.473618', '2020-04-28 07:13:34.473618'),
(95, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 08:46:18.314304', '2020-04-30 11:32:05.000000'),
(96, 'scholarship', 37, 'Nowgam bypass Srinagar', NULL, 'Srinagar', 'Jammu and Kashmir', 'Srinagar', '190001', 'India', '2020-04-28 08:49:25.209330', '2020-04-28 08:49:25.209330'),
(97, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 09:39:30.494710', '2020-04-30 11:32:05.000000'),
(98, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 09:45:01.883278', '2020-04-30 11:32:05.000000'),
(99, 'scholarship', 38, 'Jowai', NULL, 'Jowai city', 'Meghalaya', 'West jaintia hill ', '793150', 'India', '2020-04-28 09:47:17.576521', '2020-04-28 09:47:17.576521'),
(100, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 09:51:39.362434', '2020-04-30 11:32:05.000000'),
(101, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 10:43:22.967949', '2020-04-30 11:32:05.000000'),
(102, 'scholarship', 39, 'Vill Jehtana Po Shikrawa', NULL, 'Vill Jehtana Po Shikrawa', 'Haryana', 'Mewat', '122508', 'India', '2020-04-28 10:44:27.689824', '2020-04-28 10:44:27.689824'),
(103, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 10:45:18.782027', '2020-04-30 11:32:05.000000'),
(104, 'scholarship', 40, 'Near Bus station ', NULL, 'Gir gadhada ', 'Gujarat ', 'Gir Somnath ', '362530', 'India', '2020-04-28 10:46:54.762707', '2020-04-28 10:46:54.762707'),
(105, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 11:47:31.688622', '2020-04-30 11:32:05.000000'),
(106, 'scholarship', 41, 'Imphal ', NULL, 'Imphal ', 'Manipur ', 'Imphal west ', '795001', 'India', '2020-04-28 11:49:52.585833', '2020-04-28 11:49:52.585833'),
(107, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 11:50:54.273250', '2020-04-30 11:32:05.000000'),
(108, 'user', 3, 'Room 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-28 12:22:32.553141', '2020-04-30 11:32:05.000000'),
(109, 'scholarship', 42, 'Santosh Nagar1', NULL, 'Malad (East), Mumbai1', 'Maharashtra1', 'Mumbai Subarban1', '4000971', 'India', '2020-04-30 11:28:38.179214', '2020-04-30 11:29:48.000000'),
(110, 'user', 127, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-04-30 11:54:58.041681', '2020-04-30 11:54:58.041681'),
(111, 'user', 128, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-01 01:18:17.640100', '2020-05-01 01:18:17.640100'),
(112, 'user:secondary', 128, 'Santosh Nagar', NULL, 'Goregaon', 'Maharashtra', 'Mumbai', '400065', 'India', '2020-05-01 13:30:22.846773', '2020-05-01 13:41:29.000000'),
(113, 'scholarship', 43, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-02 16:57:23.375168', '2020-05-02 16:57:23.375168'),
(114, 'user', 130, 'Room No 3, Building C, BEST staff qrts', NULL, 'Room No 3, Building C, BEST staff qrts', 'Maharashtra', 'Malad (East), Mumbai', '400097', 'India', '2020-05-03 11:45:49.360113', '2020-05-03 11:45:49.360113'),
(115, 'user:secondary', 130, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-03 11:45:49.602604', '2020-05-03 11:45:49.602604'),
(116, 'scholarship', 44, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-03 15:23:18.697631', '2020-05-03 15:23:18.697631'),
(117, 'scholarship', 45, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-03 15:25:47.807952', '2020-05-03 15:25:47.807952'),
(120, 'scholarship', 48, 'Santosh Nagar', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-03 15:38:52.915946', '2020-05-03 15:38:52.915946'),
(121, 'user', 131, 'Room No 3, Building C, BEST staff qrts', NULL, 'Room No 3, Building C, BEST staff qrts', 'Maharashtra', 'Malad (East), Mumbai', '400097', 'India', '2020-05-03 21:47:47.106882', '2020-05-03 21:47:47.106882'),
(122, 'user:secondary', 131, 'Santosh Nagar', NULL, 'Goregaon', 'Maharashtra', 'Mumbai', '400065', 'India', '2020-05-03 21:47:47.309419', '2020-05-03 21:47:47.309419'),
(123, 'scholarship', 50, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-05 23:43:35.560784', '2020-05-05 23:43:35.560784'),
(124, 'scholarship', 51, 'Room No 3, Building C, BEST staff qrts', NULL, 'Malad (East), Mumbai', 'Maharashtra', 'Mumbai Subarban', '400097', 'India', '2020-05-06 11:59:14.466695', '2020-05-06 11:59:14.466695');

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `answerId` int(11) NOT NULL,
  `examId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `questionId` int(11) DEFAULT NULL,
  `userAnswer` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `examId` int(11) NOT NULL,
  `feeAmount` int(11) NOT NULL DEFAULT 0,
  `currency` varchar(255) NOT NULL DEFAULT 'INR',
  `title` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `instantResult` tinyint(4) NOT NULL DEFAULT 0,
  `languageId` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `startTime` varchar(255) DEFAULT NULL,
  `endTime` varchar(255) DEFAULT NULL,
  `instituteId` int(11) DEFAULT NULL,
  `authorId` int(11) DEFAULT NULL,
  `questionsUploaded` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`examId`, `feeAmount`, `currency`, `title`, `description`, `instantResult`, `languageId`, `date`, `startTime`, `endTime`, `instituteId`, `authorId`, `questionsUploaded`, `createdAt`, `updatedAt`) VALUES
(1, 10, 'INR', '5th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail please mail us at escholarship@blfindia.org</p>', 1, NULL, '6/7/2020', '{\"hour\":9,\"minute\":0,\"second\":0}', '{\"hour\":10,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 09:11:37.739730', '2020-04-24 09:11:37.739730'),
(2, 200, 'INR', '6th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail please visit www.blfindia.org or mail us at escholarship@blfindia.org</p>', 1, NULL, '6/7/2020', '{\"hour\":9,\"minute\":0,\"second\":0}', '{\"hour\":10,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 09:40:02.369359', '2020-04-24 09:40:02.369359'),
(3, 200, 'INR', '7th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/7/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:45:37.035700', '2020-04-24 10:45:37.035700'),
(4, 200, 'INR', '8th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/11/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:46:17.059816', '2020-04-24 10:46:17.059816'),
(5, 200, 'INR', '9th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/9/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:46:46.842521', '2020-04-24 10:46:46.842521'),
(6, 200, 'INR', '10th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/8/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:47:34.764774', '2020-04-24 10:47:34.764774'),
(7, 200, 'INR', '11th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/9/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:58:37.224124', '2020-04-24 10:58:37.224124'),
(8, 200, 'INR', '12th Class Scholarship', '<p>Total Question 		- 		50</p><p>Time Duration 		-		30 minutes</p><p>Total marks			-	 	100</p><p>Negative marking	- 		No</p><p>Result Declaration 	-	Immediately after Completion</p><p><br></p><p>for more detail mail us at escholarship@blfindia.org</p>', 1, NULL, '6/11/2020', '{\"hour\":10,\"minute\":0,\"second\":0}', '{\"hour\":11,\"minute\":0,\"second\":0}', 2, 2, 0, '2020-04-24 10:59:07.398491', '2020-04-24 10:59:07.398491'),
(9, 10, 'INR', 'शास्त्री / Shastri', '<p>Coming soon</p>', 1, NULL, NULL, 'null', 'null', 3, 2, 0, '2020-05-01 01:04:21.088115', '2020-05-01 01:04:21.088115'),
(10, 10, 'INR', 'आचार्यः / Acharya', '<p>Coming soon</p>', 1, NULL, NULL, 'null', 'null', 3, 2, 0, '2020-05-01 01:04:57.805914', '2020-05-01 01:04:57.805914'),
(11, 10, 'INR', 'डिप्लोमा / Diploma', '<p>Coming soon</p>', 1, NULL, NULL, 'null', 'null', 3, 2, 0, '2020-05-01 01:05:31.728699', '2020-05-01 01:05:31.728699');

-- --------------------------------------------------------

--
-- Table structure for table `input_field`
--

CREATE TABLE `input_field` (
  `inputFieldId` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `institute`
--

CREATE TABLE `institute` (
  `instituteId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `uniqueName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institute`
--

INSERT INTO `institute` (`instituteId`, `title`, `name`, `uniqueName`, `description`, `logo`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'ExamIn', 'ExamIn', 'examin', NULL, NULL, 1, '2020-04-24 06:06:51.214875', '2020-04-24 06:06:51.214875'),
(2, 'eScholarship 2020', 'Bright Life Foundation', 'scholarship', NULL, NULL, 1, '2020-04-24 06:06:51.237680', '2020-04-24 06:06:51.237680'),
(3, 'Entrance Exam', 'Maharishi Valmiki Sanskrit University', 'mvsu', NULL, NULL, 1, '2020-04-24 06:06:51.252756', '2020-04-24 06:06:51.252756');

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `languageId` int(11) NOT NULL,
  `language` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notificationId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `isRead` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`notificationId`, `userId`, `title`, `body`, `link`, `type`, `isRead`, `createdAt`) VALUES
(1, 3, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-24 06:09:29.985346'),
(2, 3, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/3/edit/basic', NULL, 1, '2020-04-24 06:09:42.384775'),
(3, 4, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-24 09:13:09.611464'),
(4, 4, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/4/edit/basic', NULL, 1, '2020-04-24 09:13:24.737267'),
(5, 4, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/1', NULL, 1, '2020-04-24 09:17:11.256948'),
(6, 5, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-24 09:43:10.984620'),
(7, 5, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/5/edit/basic', NULL, 0, '2020-04-24 09:43:32.063332'),
(8, 5, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/2', NULL, 0, '2020-04-24 09:51:07.912179'),
(9, 6, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 03:59:25.278022'),
(10, 6, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/6/edit/basic', NULL, 0, '2020-04-25 03:59:37.655474'),
(11, 7, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 17:13:23.989758'),
(12, 8, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-25 17:14:37.812372'),
(13, 8, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/8/edit/basic', NULL, 1, '2020-04-25 17:14:55.448374'),
(14, 8, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/5', NULL, 1, '2020-04-25 17:25:24.602172'),
(15, 9, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 21:11:52.969675'),
(16, 9, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/9/edit/basic', NULL, 0, '2020-04-25 21:12:05.370126'),
(17, 10, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 21:42:27.785387'),
(18, 10, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/10/edit/basic', NULL, 0, '2020-04-25 21:42:44.099864'),
(19, 11, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 22:25:29.629689'),
(20, 11, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/11/edit/basic', NULL, 0, '2020-04-25 22:25:52.012745'),
(21, 12, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-25 22:54:03.126519'),
(22, 12, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/12/edit/basic', NULL, 0, '2020-04-25 22:54:41.746120'),
(23, 13, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-25 23:20:21.896879'),
(24, 13, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/13/edit/basic', NULL, 1, '2020-04-25 23:20:44.929975'),
(25, 14, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 00:25:21.839977'),
(26, 14, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/14/edit/basic', NULL, 0, '2020-04-26 00:25:49.083924'),
(27, 15, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 01:09:56.825662'),
(28, 15, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/15/edit/basic', NULL, 0, '2020-04-26 01:10:12.363354'),
(29, 16, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 01:44:47.529381'),
(30, 16, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/16/edit/basic', NULL, 0, '2020-04-26 01:45:04.632798'),
(31, 17, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 01:51:36.875931'),
(32, 17, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/17/edit/basic', NULL, 0, '2020-04-26 01:52:06.505766'),
(33, 18, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 02:13:23.018040'),
(34, 18, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/18/edit/basic', NULL, 0, '2020-04-26 02:13:41.942094'),
(35, 19, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 03:37:13.033558'),
(36, 19, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/19/edit/basic', NULL, 0, '2020-04-26 03:37:38.306653'),
(37, 20, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 03:52:03.746018'),
(38, 20, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/20/edit/basic', NULL, 0, '2020-04-26 03:52:41.947906'),
(39, 21, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:02:04.280651'),
(40, 22, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 04:04:59.628509'),
(41, 23, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:23:47.889821'),
(42, 23, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/23/edit/basic', NULL, 0, '2020-04-26 04:24:08.846728'),
(43, 24, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:29:08.691080'),
(44, 24, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/24/edit/basic', NULL, 0, '2020-04-26 04:29:27.176934'),
(45, 25, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:34:47.927216'),
(46, 25, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/25/edit/basic', NULL, 0, '2020-04-26 04:35:07.417522'),
(47, 26, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:37:19.390114'),
(48, 26, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/26/edit/basic', NULL, 0, '2020-04-26 04:37:40.804174'),
(49, 27, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 04:57:52.421538'),
(50, 27, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/27/edit/basic', NULL, 0, '2020-04-26 04:58:07.805893'),
(51, 28, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 04:58:49.819993'),
(52, 28, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/28/edit/basic', NULL, 1, '2020-04-26 04:59:00.798750'),
(53, 29, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 05:07:51.237675'),
(54, 29, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/29/edit/basic', NULL, 1, '2020-04-26 05:08:30.164744'),
(55, 30, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 05:08:57.782463'),
(56, 30, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/30/edit/basic', NULL, 0, '2020-04-26 05:09:38.330396'),
(57, 30, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/30/edit/basic', NULL, 0, '2020-04-26 05:09:39.097967'),
(58, 31, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 05:22:16.955130'),
(59, 31, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/31/edit/basic', NULL, 0, '2020-04-26 05:22:34.513446'),
(60, 32, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 07:03:06.573536'),
(61, 33, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 07:03:34.310717'),
(62, 32, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/32/edit/basic', NULL, 1, '2020-04-26 07:03:36.964262'),
(63, 33, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/33/edit/basic', NULL, 0, '2020-04-26 07:03:44.626932'),
(64, 34, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 07:03:58.034709'),
(65, 34, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/34/edit/basic', NULL, 0, '2020-04-26 07:04:17.833499'),
(66, 35, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 07:21:39.982568'),
(67, 35, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/35/edit/basic', NULL, 0, '2020-04-26 07:22:04.795773'),
(68, 22, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/22/edit/basic', NULL, 1, '2020-04-26 08:44:17.641789'),
(69, 36, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 09:41:50.633205'),
(70, 37, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 09:43:01.917596'),
(71, 38, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 09:44:43.852350'),
(72, 38, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/38/edit/basic', NULL, 1, '2020-04-26 09:44:58.381604'),
(73, 39, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 09:52:34.776585'),
(74, 39, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/39/edit/basic', NULL, 0, '2020-04-26 09:52:57.004616'),
(75, 40, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 10:34:38.449495'),
(76, 41, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-26 11:50:46.906844'),
(77, 41, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/41/edit/basic', NULL, 1, '2020-04-26 11:51:03.816096'),
(78, 42, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 12:22:19.095604'),
(79, 42, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/42/edit/basic', NULL, 0, '2020-04-26 12:22:32.190899'),
(80, 43, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 13:40:05.938292'),
(81, 43, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/43/edit/basic', NULL, 0, '2020-04-26 13:40:48.054637'),
(82, 44, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 16:45:57.916217'),
(83, 44, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/44/edit/basic', NULL, 0, '2020-04-26 16:46:30.336230'),
(84, 45, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 16:49:23.466859'),
(85, 45, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/45/edit/basic', NULL, 0, '2020-04-26 16:49:46.488394'),
(86, 46, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 19:41:28.950927'),
(87, 47, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 22:55:24.401950'),
(88, 47, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/47/edit/basic', NULL, 0, '2020-04-26 22:55:48.236945'),
(89, 48, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 23:48:21.298313'),
(90, 48, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/48/edit/basic', NULL, 0, '2020-04-26 23:48:53.600442'),
(91, 49, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-26 23:55:52.153264'),
(92, 49, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/49/edit/basic', NULL, 0, '2020-04-26 23:56:08.236485'),
(93, 50, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 00:48:15.258151'),
(94, 50, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/50/edit/basic', NULL, 0, '2020-04-27 00:48:31.918752'),
(95, 51, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 01:06:31.888926'),
(96, 52, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 01:38:56.967588'),
(97, 53, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 01:43:23.093032'),
(98, 54, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 01:45:29.676263'),
(99, 53, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/53/edit/basic', NULL, 1, '2020-04-27 02:38:16.523450'),
(100, 52, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/52/edit/basic', NULL, 1, '2020-04-27 03:07:17.698167'),
(101, 55, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 04:15:46.449070'),
(102, 56, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 04:16:47.330718'),
(103, 56, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/56/edit/basic', NULL, 0, '2020-04-27 04:17:18.767719'),
(104, 57, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 04:25:09.331107'),
(105, 57, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/57/edit/basic', NULL, 0, '2020-04-27 04:25:31.119164'),
(106, 58, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 04:50:32.300487'),
(107, 59, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 04:51:40.977305'),
(108, 59, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/59/edit/basic', NULL, 1, '2020-04-27 04:51:52.517368'),
(109, 60, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 05:09:58.821449'),
(110, 60, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/60/edit/basic', NULL, 0, '2020-04-27 05:10:15.723780'),
(111, 61, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 05:51:11.404252'),
(112, 61, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/61/edit/basic', NULL, 1, '2020-04-27 05:51:30.362734'),
(113, 62, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 06:25:27.432773'),
(114, 62, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/62/edit/basic', NULL, 0, '2020-04-27 06:26:00.186569'),
(115, 63, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 06:31:26.573659'),
(116, 63, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/63/edit/basic', NULL, 0, '2020-04-27 06:31:49.489634'),
(117, 64, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 06:56:53.346080'),
(118, 64, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/64/edit/basic', NULL, 0, '2020-04-27 06:57:14.301360'),
(119, 64, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/64/edit/basic', NULL, 0, '2020-04-27 06:57:15.999753'),
(120, 65, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 07:13:29.312278'),
(121, 65, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/65/edit/basic', NULL, 0, '2020-04-27 07:13:41.743380'),
(122, 66, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 07:46:31.767770'),
(123, 66, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/66/edit/basic', NULL, 1, '2020-04-27 07:46:51.314597'),
(124, 67, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 07:53:53.911571'),
(125, 67, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/67/edit/basic', NULL, 0, '2020-04-27 07:54:10.721003'),
(126, 32, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/21', NULL, 1, '2020-04-27 08:06:25.048633'),
(127, 68, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 08:12:09.215816'),
(128, 68, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/68/edit/basic', NULL, 1, '2020-04-27 08:12:23.024154'),
(129, 69, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 08:32:53.044255'),
(130, 69, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/69/edit/basic', NULL, 0, '2020-04-27 08:33:21.969413'),
(131, 29, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/24', NULL, 1, '2020-04-27 08:44:45.823452'),
(132, 70, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 09:10:46.528106'),
(133, 70, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/70/edit/basic', NULL, 1, '2020-04-27 09:11:11.559049'),
(134, 71, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 09:16:31.374400'),
(135, 71, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/71/edit/basic', NULL, 0, '2020-04-27 09:16:56.299896'),
(136, 72, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 09:19:00.501004'),
(137, 72, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/72/edit/basic', NULL, 1, '2020-04-27 09:19:20.814898'),
(138, 73, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 10:44:50.739528'),
(139, 73, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/73/edit/basic', NULL, 1, '2020-04-27 10:45:03.671036'),
(140, 74, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 10:46:34.017264'),
(141, 74, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/74/edit/basic', NULL, 1, '2020-04-27 10:47:00.825242'),
(142, 75, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 11:24:12.957667'),
(143, 75, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/75/edit/basic', NULL, 0, '2020-04-27 11:24:34.130275'),
(144, 76, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 13:26:17.492405'),
(145, 76, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/76/edit/basic', NULL, 1, '2020-04-27 13:30:39.375412'),
(146, 77, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 13:30:59.889698'),
(147, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:45.233431'),
(148, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:45.388125'),
(149, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:45.545410'),
(150, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:45.588702'),
(151, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:46.060490'),
(152, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:46.181916'),
(153, 77, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/77/edit/basic', NULL, 0, '2020-04-27 13:31:46.310312'),
(154, 78, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 15:38:30.562336'),
(155, 78, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/78/edit/basic', NULL, 0, '2020-04-27 15:38:50.610696'),
(156, 79, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 16:40:08.584371'),
(157, 79, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/79/edit/basic', NULL, 0, '2020-04-27 16:40:26.113950'),
(158, 80, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-27 18:33:53.879709'),
(159, 80, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/80/edit/basic', NULL, 1, '2020-04-27 18:34:09.809574'),
(160, 81, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 22:49:17.668680'),
(161, 81, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/81/edit/basic', NULL, 0, '2020-04-27 22:49:38.409795'),
(162, 82, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-27 22:50:52.837949'),
(163, 82, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/82/edit/basic', NULL, 0, '2020-04-27 22:51:04.476828'),
(164, 83, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 01:35:03.254157'),
(165, 83, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/83/edit/basic', NULL, 0, '2020-04-28 01:35:19.832363'),
(166, 84, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 01:40:13.821682'),
(167, 84, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/84/edit/basic', NULL, 0, '2020-04-28 01:40:37.313612'),
(168, 85, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 02:15:02.107824'),
(169, 85, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/85/edit/basic', NULL, 0, '2020-04-28 02:15:19.053691'),
(170, 86, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 03:15:20.617055'),
(171, 86, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/86/edit/basic', NULL, 0, '2020-04-28 03:15:42.454192'),
(172, 87, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 03:42:21.647889'),
(173, 87, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/87/edit/basic', NULL, 0, '2020-04-28 03:42:45.341487'),
(174, 88, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 03:58:02.168964'),
(175, 88, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/88/edit/basic', NULL, 0, '2020-04-28 03:58:28.423698'),
(176, 89, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 04:21:41.953601'),
(177, 89, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/89/edit/basic', NULL, 0, '2020-04-28 04:22:27.240883'),
(178, 90, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 04:41:45.035137'),
(179, 90, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/90/edit/basic', NULL, 0, '2020-04-28 04:41:56.827353'),
(180, 91, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 05:07:43.554314'),
(181, 91, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/91/edit/basic', NULL, 0, '2020-04-28 05:08:04.637205'),
(182, 92, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 05:13:30.243715'),
(183, 92, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/92/edit/basic', NULL, 1, '2020-04-28 05:14:08.657782'),
(184, 93, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 05:21:31.439767'),
(185, 93, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/93/edit/basic', NULL, 1, '2020-04-28 05:22:30.334494'),
(186, 93, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/93/edit/basic', NULL, 1, '2020-04-28 05:22:30.405549'),
(187, 93, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/93/edit/basic', NULL, 1, '2020-04-28 05:22:30.505825'),
(188, 93, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/93/edit/basic', NULL, 1, '2020-04-28 05:22:30.506453'),
(189, 94, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 05:28:27.237184'),
(190, 94, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/94/edit/basic', NULL, 0, '2020-04-28 05:28:43.402725'),
(191, 95, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 05:28:55.287107'),
(192, 95, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/95/edit/basic', NULL, 0, '2020-04-28 05:29:16.542471'),
(193, 96, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 05:35:51.630188'),
(194, 96, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/96/edit/basic', NULL, 0, '2020-04-28 05:36:11.367440'),
(195, 97, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 05:39:07.018591'),
(196, 98, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:00:35.346724'),
(197, 98, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/98/edit/basic', NULL, 0, '2020-04-28 06:00:54.228143'),
(198, 99, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 06:04:02.774065'),
(199, 99, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/99/edit/basic', NULL, 1, '2020-04-28 06:04:17.697466'),
(200, 100, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:04:47.525169'),
(201, 100, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/100/edit/basic', NULL, 0, '2020-04-28 06:05:00.316299'),
(202, 101, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:17:30.499340'),
(203, 101, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/101/edit/basic', NULL, 0, '2020-04-28 06:17:49.029360'),
(204, 102, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:21:14.049545'),
(205, 102, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/102/edit/basic', NULL, 0, '2020-04-28 06:21:33.588326'),
(206, 103, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:24:51.806433'),
(207, 104, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:28:55.801319'),
(208, 104, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/104/edit/basic', NULL, 0, '2020-04-28 06:29:12.409774'),
(209, 105, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:38:51.712254'),
(210, 105, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/105/edit/basic', NULL, 0, '2020-04-28 06:39:10.062465'),
(211, 106, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 06:54:50.513789'),
(212, 106, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/106/edit/basic', NULL, 1, '2020-04-28 06:55:06.732722'),
(213, 107, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:55:08.146217'),
(214, 108, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 06:56:42.365534'),
(215, 108, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/108/edit/basic', NULL, 0, '2020-04-28 06:57:09.198730'),
(216, 107, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/107/edit/basic', NULL, 0, '2020-04-28 06:59:05.172929'),
(217, 109, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 08:03:01.325027'),
(218, 109, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/109/edit/basic', NULL, 0, '2020-04-28 08:03:12.107481'),
(219, 110, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 08:06:41.536674'),
(220, 110, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/110/edit/basic', NULL, 0, '2020-04-28 08:07:01.516078'),
(221, 111, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 08:40:46.219353'),
(222, 111, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/111/edit/basic', NULL, 0, '2020-04-28 08:41:23.180684'),
(223, 111, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/111/edit/basic', NULL, 0, '2020-04-28 08:41:23.187019'),
(224, 112, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 08:41:50.360984'),
(225, 112, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/112/edit/basic', NULL, 0, '2020-04-28 08:42:07.013781'),
(226, 113, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 08:42:48.518251'),
(227, 113, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/113/edit/basic', NULL, 1, '2020-04-28 08:43:09.446733'),
(228, 114, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 08:49:28.317109'),
(229, 114, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/114/edit/basic', NULL, 0, '2020-04-28 08:50:05.627912'),
(230, 115, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 09:32:47.267165'),
(231, 115, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/115/edit/basic', NULL, 1, '2020-04-28 09:33:01.546386'),
(232, 116, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 09:33:35.958063'),
(233, 117, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 09:37:02.726406'),
(234, 117, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/117/edit/basic', NULL, 0, '2020-04-28 09:37:20.104571'),
(235, 118, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 09:46:23.798902'),
(236, 118, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/118/edit/basic', NULL, 0, '2020-04-28 09:46:40.994145'),
(237, 119, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 09:57:01.721854'),
(238, 119, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/119/edit/basic', NULL, 0, '2020-04-28 09:57:17.802370'),
(239, 120, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 10:37:46.300465'),
(240, 120, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/120/edit/basic', NULL, 0, '2020-04-28 10:38:04.421002'),
(241, 121, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 10:40:48.944302'),
(242, 121, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/121/edit/basic', NULL, 0, '2020-04-28 10:41:02.226275'),
(243, 122, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-28 10:49:44.303284'),
(244, 122, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/122/edit/basic', NULL, 1, '2020-04-28 10:49:58.618506'),
(245, 97, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/97/edit/basic', NULL, 0, '2020-04-28 11:42:31.295813'),
(246, 123, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 11:46:54.279000'),
(247, 123, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/123/edit/basic', NULL, 0, '2020-04-28 11:47:21.504339'),
(248, 124, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 11:54:56.948737'),
(249, 124, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/124/edit/basic', NULL, 0, '2020-04-28 11:55:29.393048'),
(250, 125, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 12:09:20.550360'),
(251, 125, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/125/edit/basic', NULL, 0, '2020-04-28 12:09:52.140269'),
(252, 126, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 0, '2020-04-28 12:23:50.512041'),
(253, 126, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/126/edit/basic', NULL, 0, '2020-04-28 12:24:07.382969'),
(254, 127, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-04-30 11:45:03.889682'),
(255, 127, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/127/edit/basic', NULL, 1, '2020-04-30 11:45:23.715572'),
(256, 128, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-05-01 01:16:51.632293'),
(257, 128, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/128/edit/basic', NULL, 1, '2020-05-01 01:17:14.528043'),
(258, 128, 'Congratulations!', 'You\'ve successfully paid the exam fees of 200 INR', '/payment/42', NULL, 1, '2020-05-02 16:58:04.984087'),
(259, 129, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-05-03 00:09:15.021163'),
(260, 129, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/129/edit/basic', NULL, 1, '2020-05-03 00:09:30.942480'),
(261, 130, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-05-03 11:32:15.221660'),
(262, 130, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/130/edit/basic', NULL, 1, '2020-05-03 11:32:35.922303'),
(263, 131, 'Welcome!', 'You\'re successfully registered on www.examin.com', NULL, NULL, 1, '2020-05-03 21:46:35.244558'),
(264, 131, 'Please complete your profile!', 'In order to apply for an exam, please complete your profile by clicking here', '/user/131/edit/basic', NULL, 1, '2020-05-03 21:46:50.294238'),
(265, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/54', NULL, 1, '2020-05-06 00:38:10.944198'),
(266, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/55', NULL, 1, '2020-05-06 00:41:26.516659'),
(267, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/58', NULL, 1, '2020-05-06 00:56:39.106787'),
(268, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/59', NULL, 1, '2020-05-06 00:57:39.829255'),
(269, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/60', NULL, 1, '2020-05-06 01:00:13.845028'),
(270, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/66', NULL, 0, '2020-05-06 12:00:35.678263'),
(271, 131, 'Congratulations!', 'You\'ve successfully paid the exam fees of 10 INR', '/payment/67', NULL, 0, '2020-05-06 12:07:22.295398');

-- --------------------------------------------------------

--
-- Table structure for table `option`
--

CREATE TABLE `option` (
  `optionId` int(11) NOT NULL,
  `questionId` int(11) DEFAULT NULL,
  `optionNumber` int(11) DEFAULT NULL,
  `optionValue` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `examId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `requestId` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `buyer` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `currency` varchar(255) NOT NULL DEFAULT 'INR',
  `purpose` varchar(255) DEFAULT NULL,
  `gatewayName` varchar(255) DEFAULT NULL,
  `gatewaySignature` varchar(255) DEFAULT NULL,
  `gatewayPaymentId` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `gatewayKey` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`paymentId`, `userId`, `examId`, `status`, `requestId`, `amount`, `buyer`, `phone`, `email`, `currency`, `purpose`, `gatewayName`, `gatewaySignature`, `gatewayPaymentId`, `createdAt`, `updatedAt`, `gatewayKey`) VALUES
(1, 4, 1, 'created', 'order_EiGoRbgPnDtwfJ', 200, 'Dinesh Kumar', '8088708000', 'dineshwebb@gmail.com', 'INR', 'Exam fees', 'razorpay', 'a92aefbd76724b0074c60e6959ac52dc1849b53c8f742c6ab85ec0d4ce3baf12', 'pay_EiGohLf0c7TiBI', '2020-04-24 09:16:27.515780', '2020-04-24 09:17:11.000000', NULL),
(2, 5, 2, 'credit', 'order_EiHNuMCh1rZK1s', 200, 'Vikash A', '8929812812', 'blfngoindia@gmail.com', 'INR', 'Exam fees', 'razorpay', '023762c3c6eed7ba9959451d6cb8e2ef02fc2dab8e7a567d0e95479dada4061a', 'pay_EiHOV1cZmDz99V', '2020-04-24 09:50:01.880922', '2020-04-24 09:51:07.000000', NULL),
(3, 4, 1, 'created', 'order_EiOUSbyHs4lXVb', 200, 'Dinesh Kumar', '8088708000', 'dineshwebb@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-24 16:47:05.351391', '2020-04-24 16:47:05.351391', NULL),
(4, 8, 2, 'created', 'order_Einf17AchKOXd1', 200, 'Aarvi Singh', '8095708002', 'aarvi@dineshk.me', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-25 17:24:25.321295', '2020-04-25 17:24:25.321295', NULL),
(5, 8, 2, 'credit', 'order_EinfM9L5Qo782u', 200, 'Aarvi Singh', '8095708002', 'aarvi@dineshk.me', 'INR', 'Exam fees', 'razorpay', '805b5a1a37631bd20587bf9b761a303ec2d260e1d1edf56e86cfa6856b26ab73', 'pay_EinfbUaJ9Irs4X', '2020-04-25 17:24:44.586970', '2020-04-25 17:25:24.000000', NULL),
(6, 12, 8, 'created', 'order_EitQODVFtxeuhc', 200, 'Zahid iqbal', '7051705126', 'mohdiqbal6036@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-25 23:02:44.167420', '2020-04-25 23:02:44.167420', NULL),
(7, 29, 6, 'created', 'order_Ej0FH7KVIM7jpZ', 200, 'Deepak', '9086235171', 'dkadfg22@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 05:43:04.196449', '2020-04-26 05:43:04.196449', NULL),
(8, 35, 2, 'created', 'order_Ej25nuFJMcxlVC', 200, 'Deepak', '9416573171', 'deepakdc07@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 07:31:29.430463', '2020-04-26 07:31:29.430463', NULL),
(9, 32, 1, 'created', 'order_Ej2XWpDx6HZuJp', 200, 'ram kumar', '9315405360', 'hritebm@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 07:57:44.195564', '2020-04-26 07:57:44.195564', NULL),
(10, 32, 6, 'created', 'order_Ej2fr1pwwGjONN', 200, 'ram kumar', '9315405360', 'hritebm@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 08:05:37.099368', '2020-04-26 08:05:37.099368', NULL),
(11, 38, 1, 'created', 'order_Ej4T3OFCY5VMA6', 200, 'Vikas', '8929812812', 'blfngoindia@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 09:50:53.259810', '2020-04-26 09:50:53.259810', NULL),
(12, 39, 8, 'created', 'order_Ej4iq714QWe1bs', 200, 'Shivam Sharma', '9794404591', 'shivam.agruzal2002@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 10:05:49.900225', '2020-04-26 10:05:49.900225', NULL),
(13, 39, 8, 'created', 'order_Ej4j7lDv03rxNE', 200, 'Shivam Sharma', '9794404591', 'shivam.agruzal2002@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 10:06:06.064813', '2020-04-26 10:06:06.064813', NULL),
(14, 29, 6, 'created', 'order_Ej9DZkyaPBDaLW', 200, 'Deepak', '9086235171', 'dkadfg22@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 14:29:42.187194', '2020-04-26 14:29:42.187194', NULL),
(15, 44, 8, 'created', 'order_EjBe55UnFSarad', 200, 'Matab Hussain', '8472938139', 'matabhussain8472@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 16:52:10.919281', '2020-04-26 16:52:10.919281', NULL),
(16, 44, 8, 'created', 'order_EjBe6O77PQKKmN', 200, 'Matab Hussain', '8472938139', 'matabhussain8472@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 16:52:12.099529', '2020-04-26 16:52:12.099529', NULL),
(17, 48, 8, 'created', 'order_EjIqg0RBgdU84K', 200, 'Tahir Malik', '9541216460', 'mtahir9712@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-26 23:54:57.639385', '2020-04-26 23:54:57.639385', NULL),
(18, 29, 6, 'created', 'order_EjO9vATH0yCNRO', 200, 'Deepak', '9086235171', 'dkadfg22@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 05:06:38.818353', '2020-04-27 05:06:38.818353', NULL),
(19, 32, 1, 'created', 'order_EjR3DfFRvjzpve', 200, 'ram kumar', '9315405360', 'hritebm@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 07:56:23.003193', '2020-04-27 07:56:23.003193', NULL),
(20, 32, 1, 'created', 'order_EjR4zsun1usc9e', 200, 'ram kumar', '9315405360', 'hritebm@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 07:58:03.969051', '2020-04-27 07:58:03.969051', NULL),
(21, 32, 1, 'credit', 'order_EjRBBWTLqLW92K', 200, 'ram kumar', '9315405360', 'hritebm@gmail.com', 'INR', 'Exam fees', 'razorpay', '47d00e975a8d1d38e3094dee874612b557bf338f8bddc169bb8b29d3350b110a', 'pay_EjRC5SzqQuAdis', '2020-04-27 08:03:55.437324', '2020-04-27 08:06:25.000000', NULL),
(22, 68, 4, 'created', 'order_EjRNiMYCl5PoBa', 200, 'FAIZAN QADIR NAJAR', '9596573497', 'burhannajar@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 08:15:47.134685', '2020-04-27 08:15:47.134685', NULL),
(23, 68, 4, 'created', 'order_EjROKDeqt47viQ', 200, 'FAIZAN QADIR NAJAR', '9596573497', 'burhannajar@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 08:16:21.852508', '2020-04-27 08:16:21.852508', NULL),
(24, 29, 6, 'credit', 'order_EjRnvpVxoLUkh5', 200, 'Deepak', '9086235171', 'dkadfg22@gmail.com', 'INR', 'Exam fees', 'razorpay', '5f336ce9a5acb710f9f4f06b2d2c9c4cd79aec414578461112f2575962f1e2ae', 'pay_EjRqr7BSYVlhh8', '2020-04-27 08:40:36.283676', '2020-04-27 08:44:45.000000', NULL),
(25, 71, 8, 'created', 'order_EjSYL0tKwebEaB', 200, 'Mushtaq Ahmad Malik', '7780962409', 'mushtaqah29@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 09:24:32.156680', '2020-04-27 09:24:32.156680', NULL),
(26, 73, 7, 'created', 'order_EjTzIj9QVCauJl', 200, 'Kush Manihar', '9413170747', 'kushmaheswari1@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 10:48:45.292517', '2020-04-27 10:48:45.292517', NULL),
(27, 76, 6, 'created', 'order_EjWscP9vnWhfSL', 200, 'Kanhaiya jha ', '9973782368', 'jkanhaiya199@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 13:38:30.553619', '2020-04-27 13:38:30.553619', NULL),
(28, 77, 6, 'created', 'order_EjWtnBVJ69ChL6', 200, 'Rather Abid', '7889987588', 'ratherbilal169@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-27 13:39:37.226594', '2020-04-27 13:39:37.226594', NULL),
(29, 84, 8, 'created', 'order_EjjJjaA94bWOvf', 200, 'Subhasmita Das', '9668796534', 'subhasmitadas501@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 01:48:30.100157', '2020-04-28 01:48:30.100157', NULL),
(30, 86, 6, 'created', 'order_EjlAZn96QnlWML', 200, 'Sameer Chopan', '9149967375', 'sameerchopan510@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 03:37:13.179509', '2020-04-28 03:37:13.179509', NULL),
(31, 87, 3, 'created', 'order_EjlP9bDF6E4VAK', 200, 'Arvind Kumar ', '7856067381', 'mahtodularchand177@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 03:51:01.183248', '2020-04-28 03:51:01.183248', NULL),
(32, 87, 3, 'created', 'order_EjlQHk3FzKc9v6', 200, 'Arvind Kumar ', '7856067381', 'mahtodularchand177@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 03:52:05.423655', '2020-04-28 03:52:05.423655', NULL),
(33, 88, 1, 'created', 'order_Ejm0ZU0hMPloj4', 200, 'Buddhadeb Paul', '9749370159', 'buddhadebpaul743@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 04:26:26.495832', '2020-04-28 04:26:26.495832', NULL),
(34, 100, 8, 'created', 'order_Ejns2LP8pGiNeK', 200, 'Huzaif ul hassan', '9682131381', 'huzaifulhassan999@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 06:15:44.968772', '2020-04-28 06:15:44.968772', NULL),
(35, 102, 6, 'created', 'order_Ejo5Wro4TUA3JX', 200, 'Siddardha', '7601057932', 'siddartha666666@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 06:28:31.339101', '2020-04-28 06:28:31.339101', NULL),
(36, 108, 7, 'created', 'order_EjorkB9nto2yZW', 200, 'Mudasir Ahmad Thoker', '9682675908', 'www.singve444@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 07:14:09.930875', '2020-04-28 07:14:09.930875', NULL),
(37, 117, 8, 'created', 'order_EjrUNWflwdx6kI', 200, 'Kamphermi Dkhar', '8131936207', 'kamphermi364@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 09:48:07.632068', '2020-04-28 09:48:07.632068', NULL),
(38, 120, 7, 'created', 'order_EjsSUCAhvZ68C2', 200, 'Partap ', '9813527940', 'partapk238@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 10:45:01.733196', '2020-04-28 10:45:01.733196', NULL),
(39, 121, 6, 'created', 'order_EjsVRBpiuM2Q69', 200, 'Jogiya Kiran Kamlesh Bhai ', '9510943148', 'damyantijogiya123@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 10:47:49.380297', '2020-04-28 10:47:49.380297', NULL),
(40, 97, 7, 'created', 'order_Ejta9ToIE6kvnv', 200, 'Salma', '7628056260', 'Almaazzsyed7628@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-04-28 11:50:58.805583', '2020-04-28 11:50:58.805583', NULL),
(41, 128, 1, 'created', 'order_ElTJs7976MWqBy', 200, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-02 16:57:32.317076', '2020-05-02 16:57:32.317076', NULL),
(42, 128, 1, 'credit', 'order_ElTJwdps3SiTRA', 200, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', '1d513340a782a316d6641068907b6007995f0a69e4ab2c8fe6316909b9458cec', 'pay_ElTKNmmDCHzpWy', '2020-05-02 16:57:36.349338', '2020-05-02 16:58:04.000000', NULL),
(43, 131, 9, 'created', 'order_EmlmHHYx9UvF32', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:39:55.162656', '2020-05-05 23:39:55.162656', NULL),
(44, 131, 9, 'created', 'order_EmlmPcjRFl4gDT', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:40:02.573528', '2020-05-05 23:40:02.573528', NULL),
(45, 131, 1, 'created', 'order_EmlqFCmQed2Btq', 200, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:43:40.319267', '2020-05-05 23:43:40.319267', NULL),
(46, 131, 11, 'created', 'order_EmltoOKQqTkxzw', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:47:02.969591', '2020-05-05 23:47:02.969591', NULL),
(47, 131, 9, 'created', 'order_EmlvcpLEhyWanZ', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:48:45.876475', '2020-05-05 23:48:45.876475', NULL),
(48, 131, 9, 'created', 'order_Emlx8v8fuOZEbE', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:50:12.117699', '2020-05-05 23:50:12.117699', NULL),
(49, 131, 9, 'created', 'order_Emm391Ta56YtZr', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-05 23:55:52.982825', '2020-05-05 23:55:52.982825', NULL),
(50, 131, 1, 'created', 'order_Emm8ctvtNkbXIE', 200, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 00:01:04.588917', '2020-05-06 00:01:04.588917', NULL),
(51, 131, 1, 'created', 'order_EmmEg1CPbDAMPk', 200, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 00:06:48.074806', '2020-05-06 00:06:48.074806', NULL),
(52, 131, 1, 'created', 'order_EmmSiHufcM3Byi', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 00:20:05.312370', '2020-05-06 00:20:05.312370', NULL),
(53, 131, 1, 'created', 'order_EmmkANisFq9sFf', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 00:36:36.635442', '2020-05-06 00:36:36.635442', NULL),
(57, 131, 1, 'created', 'order_Emn4ohPGvthIq9', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 00:56:09.642842', '2020-05-06 00:56:09.642842', NULL),
(61, 131, 1, 'created', 'order_EmwLjuhmXePxEb', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 10:00:25.491957', '2020-05-06 10:00:25.491957', NULL),
(62, 131, 1, 'created', 'order_EmwMNU09ddRX6r', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 10:01:01.644469', '2020-05-06 10:01:01.644469', NULL),
(63, 131, 9, 'created', 'order_EmwNLXoIPzhgro', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 10:01:56.622814', '2020-05-06 10:01:56.622814', NULL),
(64, 131, 9, 'created', 'order_EmwdUzx5MRu1nS', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 10:17:14.143198', '2020-05-06 10:17:14.143198', NULL),
(65, 131, 9, 'created', 'order_EmxXWuryq6UcEC', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', NULL, NULL, '2020-05-06 11:10:16.726971', '2020-05-06 11:10:16.726971', NULL),
(66, 131, 1, 'credit', 'order_EmyOHeUNWZ5evs', 10, 'Abhijeet Salunkhe', '9867884320', 'abhijeetwebdev@gmail.com', 'INR', 'Exam fees', 'razorpay', 'e4ab44de11d9d7c748db70901adabd60c02629fb7840144e217f65483e2eeef3', 'pay_EmyOcV7KHLaP48', '2020-05-06 12:00:13.044928', '2020-05-06 12:00:35.000000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `questionId` int(11) NOT NULL,
  `examId` int(11) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `A` varchar(255) DEFAULT NULL,
  `B` varchar(255) DEFAULT NULL,
  `C` varchar(255) DEFAULT NULL,
  `D` varchar(255) DEFAULT NULL,
  `correctAnswer` varchar(255) DEFAULT NULL,
  `marks` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `resultId` int(11) NOT NULL,
  `userId` int(11) NOT NULL DEFAULT 0,
  `examId` int(11) NOT NULL DEFAULT 0,
  `correctAnswers` int(11) NOT NULL DEFAULT 0,
  `wrongAnswers` int(11) NOT NULL DEFAULT 0,
  `score` int(11) NOT NULL DEFAULT 0,
  `marks` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scholarship`
--

CREATE TABLE `scholarship` (
  `scholarshipId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `schoolName` varchar(255) DEFAULT NULL,
  `schoolClass` varchar(255) DEFAULT NULL,
  `examMedium` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `examId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scholarship`
--

INSERT INTO `scholarship` (`scholarshipId`, `userId`, `schoolName`, `schoolClass`, `examMedium`, `createdAt`, `updatedAt`, `examId`) VALUES
(1, 4, 'Sarvodya School ', '9', 'hindi', '2020-04-24 09:15:52.608567', '2020-04-24 09:15:52.608567', NULL),
(2, 5, 'Sarvodya School', '8', 'hindi', '2020-04-24 09:47:39.415361', '2020-04-24 09:47:39.415361', NULL),
(3, 6, 'B.D.', '5', 'hindi', '2020-04-25 04:03:28.291111', '2020-04-25 04:03:28.291111', NULL),
(4, 8, 'ABC Kids School', '6', 'english', '2020-04-25 17:22:44.534965', '2020-04-25 17:22:44.534965', NULL),
(5, 12, 'Govt boys higher secondary school kulgam', '12', 'english', '2020-04-25 23:02:07.445947', '2020-04-25 23:02:07.445947', NULL),
(6, 13, 'MKJ high school', '11', 'english', '2020-04-25 23:29:57.180906', '2020-04-25 23:29:57.180906', NULL),
(7, 25, 'Govt Boys Higher secondary school ', '10', 'english', '2020-04-26 04:43:52.182743', '2020-04-26 04:43:52.182743', NULL),
(8, 28, 'Govt sr sec school, saran , Faridabad', '12', 'hindi', '2020-04-26 05:05:19.676976', '2020-04-26 05:05:19.676976', NULL),
(9, 29, 'Shastri shiksha kendra high school ', '10', 'english', '2020-04-26 05:22:43.191722', '2020-04-26 05:22:43.191722', NULL),
(10, 31, 'Mount fort academy ', '10', 'english', '2020-04-26 05:26:41.166100', '2020-04-26 05:26:41.166100', NULL),
(11, 35, 'Tgghjn', '5', 'english', '2020-04-26 07:29:18.355448', '2020-04-26 07:29:18.355448', NULL),
(12, 32, 'abc shool', '5', 'english', '2020-04-26 07:57:24.892090', '2020-04-26 07:57:24.892090', NULL),
(13, 38, 'djsnasn', '5', 'english', '2020-04-26 09:50:21.368228', '2020-04-26 09:50:21.368228', NULL),
(14, 39, ' Brijendra mani inter college', '12', 'hindi', '2020-04-26 10:05:27.418186', '2020-04-26 10:05:27.418186', NULL),
(15, 44, 'Karimganj Junior college', '12', 'english', '2020-04-26 16:51:17.913274', '2020-04-26 16:51:17.913274', NULL),
(16, 48, 'BHS Halmatpora', '12', 'english', '2020-04-26 23:54:05.901270', '2020-04-26 23:54:05.901270', NULL),
(17, 53, 'Nirmala Higher secondary school Aluva', '6', 'english', '2020-04-27 03:02:37.988770', '2020-04-27 03:02:37.988770', NULL),
(18, 52, 'Seventh Day Adventist H.S.S', '12', 'english', '2020-04-27 03:20:34.195813', '2020-04-27 03:20:34.195813', NULL),
(19, 64, 'Adarsh nursery convent schoolworks', '10', 'english', '2020-04-27 07:10:17.473230', '2020-04-27 07:10:17.473230', NULL),
(20, 68, 'NEW MILLENNIUM PUBLIC SCHOOL HANDWARA ', '8', 'english', '2020-04-27 08:15:17.846893', '2020-04-27 08:15:17.846893', NULL),
(21, 71, 'Govt higher secondary school bandipora', '12', 'english', '2020-04-27 09:23:46.746031', '2020-04-27 09:23:46.746031', NULL),
(22, 73, 'Swami Vivekanand govt model school', '11', 'english', '2020-04-27 10:48:36.952824', '2020-04-27 10:48:36.952824', NULL),
(23, 76, '+2sati high school ', '10', 'hindi', '2020-04-27 13:37:49.474627', '2020-04-27 13:37:49.474627', NULL),
(24, 77, 'Jand k sainik school manasbal', '10', 'english', '2020-04-27 13:38:16.498201', '2020-04-27 13:38:16.498201', NULL),
(25, 79, 'GOVT  HIGHER SECONDARY SCHOOL KULLAR', '12', 'english', '2020-04-27 16:48:49.071836', '2020-04-27 16:48:49.071836', NULL),
(26, 83, 'G. K. J. C, Balasore', '12', 'english', '2020-04-28 01:41:21.205076', '2020-04-28 01:41:21.205076', NULL),
(27, 84, 'Aul higher college,aul', '12', 'hindi', '2020-04-28 01:47:22.176821', '2020-04-28 01:47:22.176821', NULL),
(28, 86, 'Public modal school wadwan', '10', 'english', '2020-04-28 03:36:39.592640', '2020-04-28 03:36:39.592640', NULL),
(29, 87, 'Don bosco convent school ', '7', 'english', '2020-04-28 03:50:05.232533', '2020-04-28 03:50:05.232533', NULL),
(30, 88, 'Sewli high school', '12', 'english', '2020-04-28 04:21:30.837387', '2020-04-28 04:21:30.837387', NULL),
(31, 93, 'Birpara high school', '12', '', '2020-04-28 05:29:42.765725', '2020-04-28 05:29:42.765725', NULL),
(32, 98, 'JNV Bolangir', '12', 'english', '2020-04-28 06:04:35.833575', '2020-04-28 06:04:35.833575', NULL),
(33, 99, 'Hariyana Vidya Mandir', '10', 'english', '2020-04-28 06:07:57.622090', '2020-04-28 06:07:57.622090', NULL),
(34, 100, 'Higher secondary', '12', 'english', '2020-04-28 06:15:07.540416', '2020-04-28 06:15:07.540416', NULL),
(35, 102, 'Ratnam', '10', 'english', '2020-04-28 06:28:07.555756', '2020-04-28 06:28:07.555756', NULL),
(36, 108, 'Higher secondary school wager', '11', 'english', '2020-04-28 07:13:34.462668', '2020-04-28 07:13:34.462668', NULL),
(37, 113, 'Srinagar British school', '12', 'english', '2020-04-28 08:49:25.198472', '2020-04-28 08:49:25.198472', NULL),
(38, 117, 'Government Boy`s Higher Secondary School', '12', 'english', '2020-04-28 09:47:17.565587', '2020-04-28 09:47:17.565587', NULL),
(39, 120, 'GSSS Jehtana ', '11', 'hindi', '2020-04-28 10:44:27.678187', '2020-04-28 10:44:27.678187', NULL),
(40, 121, 'Shree Abhinav vidya mandir Gir gadhada ', '10', 'hindi', '2020-04-28 10:46:54.751561', '2020-04-28 10:46:54.751561', NULL),
(41, 97, 'T.G. Higher Secondary Education, Imphal ', '11', 'english', '2020-04-28 11:49:52.574528', '2020-04-28 11:49:52.574528', NULL),
(42, 3, 'Gurukul Vidyalaya1', '10', 'english', '2020-04-30 11:28:38.054566', '2020-04-30 11:29:48.000000', NULL),
(43, 128, 'Gurukul Vidyalaya', '5', 'english', '2020-05-02 16:57:23.245164', '2020-05-02 16:57:23.245164', NULL),
(51, 131, 'Gurukul Vidyalaya', '5', 'hindi', '2020-05-06 11:59:14.327654', '2020-05-06 11:59:14.327654', 1);

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

CREATE TABLE `university` (
  `universityId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `examId` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `sscPassingYear` varchar(255) DEFAULT NULL,
  `sscBoardName` varchar(255) DEFAULT NULL,
  `sscCertificateNumber` varchar(255) DEFAULT NULL,
  `sscPercentage` varchar(255) DEFAULT NULL,
  `hscPassingYear` varchar(255) DEFAULT NULL,
  `hscBoardName` varchar(255) DEFAULT NULL,
  `hscCertificateNumber` varchar(255) DEFAULT NULL,
  `hscPercentage` varchar(255) DEFAULT NULL,
  `graduationPassingYear` varchar(255) DEFAULT NULL,
  `graduationBoardName` varchar(255) DEFAULT NULL,
  `graduationCertificateNumber` varchar(255) DEFAULT NULL,
  `graduationPercentage` varchar(255) DEFAULT NULL,
  `postGraduationPassingYear` varchar(255) DEFAULT NULL,
  `postGraduationBoardName` varchar(255) DEFAULT NULL,
  `postGraduationCertificateNumber` varchar(255) DEFAULT NULL,
  `postGraduationPercentage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `fathersName` varchar(255) DEFAULT NULL,
  `mothersName` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emailVerified` tinyint(4) NOT NULL DEFAULT 0,
  `countryCode` varchar(255) NOT NULL DEFAULT '+91',
  `mobile` varchar(255) NOT NULL,
  `mobileOTP` varchar(255) DEFAULT NULL,
  `mobileVerified` tinyint(4) NOT NULL DEFAULT 0,
  `forgotPasswordRequested` tinyint(4) NOT NULL DEFAULT 0,
  `role` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `caste` varchar(255) DEFAULT NULL,
  `instituteId` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `parentsNumber` varchar(255) DEFAULT NULL,
  `aadhaarNumber` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `firstName`, `lastName`, `fullName`, `profileImage`, `fathersName`, `mothersName`, `gender`, `dateOfBirth`, `password`, `email`, `emailVerified`, `countryCode`, `mobile`, `mobileOTP`, `mobileVerified`, `forgotPasswordRequested`, `role`, `bio`, `caste`, `instituteId`, `createdAt`, `updatedAt`, `parentsNumber`, `aadhaarNumber`, `religion`) VALUES
(1, 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2a$08$s0WmLR/E4ZEmsroKtv0IsO9ftcEZjFDnXmD2grv7vd/h9AwUQ13jq', NULL, 0, '+91', '', NULL, 0, 0, 'ADMIN', NULL, NULL, 1, '2020-04-24 06:06:51.126969', '2020-04-24 06:06:51.126969', NULL, NULL, NULL),
(2, 'examin', NULL, NULL, 'ExamIn', NULL, NULL, NULL, NULL, NULL, '$2a$08$HlHt8FxNg53gbyo6FDZPzO1wEBGkCVC.EzQt8lqtISw6DJKStlDUy', NULL, 0, '+91', '9000000000', NULL, 1, 0, 'ADMIN', NULL, NULL, 1, '2020-04-24 06:06:51.192258', '2020-04-24 06:06:51.192258', NULL, NULL, NULL),
(106, NULL, NULL, NULL, 'YASH SUKHADEVRAO GORDE', NULL, NULL, NULL, NULL, NULL, '$2a$08$16k7puVW4Jg1rgVVHOnHx.ZBWNow3wUCiVkIvQuF2oxeR1kZq/r6q', 'yashgorde6@gmail.com', 0, '+91', '7620627417', '8518', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 06:54:50.503059', '2020-04-28 06:55:06.000000', NULL, NULL, NULL),
(107, NULL, NULL, NULL, 'Md jawed akhtar', NULL, NULL, NULL, NULL, NULL, '$2a$08$l9qaMw.kSpup16/WYD3nCuobLyetHHMQ3OSX5B/N.MOKMWNy/W4We', 'mdjawedakhtar828401@gmail.com', 0, '+91', '8210563079', '4582', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 06:55:08.135733', '2020-04-28 06:59:05.000000', NULL, NULL, NULL),
(108, NULL, NULL, NULL, 'Mudasir Ahmad Thoker', 'uploads/avatars/108-1588057497517.png', 'Bashir Ahmed thoker', 'Rafeeqa banu', 'male', '2003-01-01', '$2a$08$0gj1PVBWizpc4U4PDY.dGeqIIv6OrrFsY9gp3LcOYwhRCEZ66vxCy', 'www.singve444@gmail.com', 0, '+91', '9682675908', '5476', 1, 0, 'STUDENT', NULL, 'SC', 2, '2020-04-28 06:56:42.355864', '2020-04-28 07:11:18.000000', NULL, NULL, NULL),
(109, NULL, NULL, NULL, 'Lamyanba Yumnam', NULL, NULL, NULL, NULL, NULL, '$2a$08$GVzgn3SMbbV6dFwjvLSbF.uwsFclCFBU7WgnvRBfuXrJniyn8JGpe', 'RobertLin125@gmail.com', 0, '+91', '8787831263', '5112', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 08:03:01.314068', '2020-04-28 08:03:12.000000', NULL, NULL, NULL),
(110, NULL, NULL, NULL, 'Irfan nabi ', NULL, NULL, NULL, NULL, NULL, '$2a$08$rU7wV1JysXrPZf7HyYcIMO7QRulpM0tKhKsRru5A06fXZDCYpDJvO', 'iamirusheikh@gmail.com', 0, '+91', '7051623264', '1015', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 08:06:41.525659', '2020-04-28 08:07:01.000000', NULL, NULL, NULL),
(111, NULL, NULL, NULL, 'SHEIKH TOWFEEQ RAOOF', NULL, NULL, NULL, NULL, NULL, '$2a$08$Z9oo40fgNPaEQM48x.9yPuTYimeuUSyUTkZwEQ9faAFNFC6ThQ29G', 'kmrboys2580@gmail.com', 0, '+91', '7006747184', '5523', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 08:40:46.207264', '2020-04-28 08:41:23.000000', NULL, NULL, NULL),
(112, NULL, NULL, NULL, 'Mahendra deep ', NULL, NULL, NULL, NULL, NULL, '$2a$08$lKL1CGJiZLD9Ll13Aljd0.rJuKrEN/84SIeFLXMG.dX57iADeO0wK', 'mahendradeep2001@gmail.com', 0, '+91', '9668660024', '3774', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 08:41:50.350118', '2020-04-28 08:42:07.000000', NULL, NULL, NULL),
(113, NULL, NULL, NULL, 'Shah Tufail Ahmad ', 'uploads/avatars/113-1588063502438.png', 'Mushtaq Ahmad shah', 'Haleema bano', 'male', '1998-05-05', '$2a$08$PUyzZ4mo3hevPh5W6Sx.L.XN9hK9ecY6ZV5Vz7fhecQErTfZtYjvq', 'shahtufail121@gmail.com', 0, '+91', '9622552515', '5050', 1, 0, 'STUDENT', NULL, 'General', 1, '2020-04-28 08:42:48.505238', '2020-04-28 08:46:18.000000', NULL, NULL, NULL),
(114, NULL, NULL, NULL, 'Nishima Basumatary', NULL, NULL, NULL, NULL, NULL, '$2a$08$k3DK.dHKZaC9GgMzSch3F.Efjbw1r00FACrTdUDq5IUszw4Aw65Xm', 'nishimabasumatary0@gmail.com', 0, '+91', '6001919995', '7886', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 08:49:28.306543', '2020-04-28 08:50:05.000000', NULL, NULL, NULL),
(115, NULL, NULL, NULL, 'Momin farooq ', 'uploads/avatars/115-1588066611492.png', 'Farooqahmadbhat', 'Yasmeena', 'male', '2020-04-28', '$2a$08$AZEqESFUEjeNgogH01BnOOwQ0OaPIvzfQYlk0G6qEvvTD3wj2p2vi', 'bhat78607@gmail.com', 0, '+91', '9541440972', '8499', 1, 0, 'STUDENT', NULL, 'General', 1, '2020-04-28 09:32:47.255914', '2020-04-28 09:39:30.000000', NULL, NULL, NULL),
(116, NULL, NULL, NULL, 'Kamphermi Dkhar', NULL, NULL, NULL, NULL, NULL, '$2a$08$xYLB3Eg/zJqpCoM4P9Q3vOKbw.tgslF./QvPjDHk.BSnR.ebsvjdW', 'kamphermi12@gmail.com', 0, '+91', '8787382452', '8626', 0, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 09:33:35.945909', '2020-04-28 09:33:35.945909', NULL, NULL, NULL),
(117, NULL, NULL, NULL, 'Kamphermi Dkhar', 'uploads/avatars/117-1588066964787.png', 'Sohbha Bareh', 'Ephulmis Dkhar', 'male', '2002-08-08', '$2a$08$5/f.otdortbp7Q71MZkPfuGNkowAZrPzzF4A6YFdN2sp5Doa7nb02', 'kamphermi364@gmail.com', 0, '+91', '8131936207', '2978', 1, 0, 'STUDENT', NULL, 'ST', 2, '2020-04-28 09:37:02.715849', '2020-04-28 09:45:01.000000', NULL, NULL, NULL),
(118, NULL, NULL, NULL, 'BENU DAS', 'uploads/avatars/118-1588067406858.png', 'UJJAL DAS', 'RUPALI DAS', 'male', '1994-10-07', '$2a$08$XmfBmFkOr1BAwYpApdRNTOnNAOhk4Le4DLlH2MVsFMFmkNjZhAag2', 'benudas94@yahoo.com', 0, '+91', '8876206481', '7484', 1, 0, 'STUDENT', NULL, 'SC', 2, '2020-04-28 09:46:23.788625', '2020-04-28 09:51:39.000000', NULL, NULL, NULL),
(119, NULL, NULL, NULL, 'Abbash Uddin', NULL, NULL, NULL, NULL, NULL, '$2a$08$tTvTVdWBIYfjuUkDB.ZOduZ.BtS5A/f2rjBCxEBR8Ql.mnFN9f5Di', 'abbashuddin839@gmail.com', 0, '+91', '6900611160', '4669', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 09:57:01.710795', '2020-04-28 09:57:17.000000', NULL, NULL, NULL),
(120, NULL, NULL, NULL, 'Partap ', 'uploads/avatars/120-1588070599995.png', 'Ram kisan', 'Jagwati', 'male', '1996-12-20', '$2a$08$4TTwfmjpoF0e9zxlmajyEe.GhDh6Uq9B0RGL/.wPCtt70O0HKMKCi', 'partapk238@gmail.com', 0, '+91', '9813527940', '5613', 1, 0, 'STUDENT', NULL, 'OBC', 2, '2020-04-28 10:37:46.289453', '2020-04-28 10:43:22.000000', NULL, NULL, NULL),
(121, NULL, NULL, NULL, 'Jogiya Kiran Kamlesh Bhai ', 'uploads/avatars/121-1588070713324.png', 'Kamlesh bhai Jogiya ', 'Nayana ben Jogiya ', 'female', '2005-02-12', '$2a$08$Pywu3R1MX3phZqEa.AnydeTC.46BEHLAEy7wixBzXH0oawhei3bcy', 'damyantijogiya123@gmail.com', 0, '+91', '9510943148', '2038', 1, 0, 'STUDENT', NULL, 'OBC', 2, '2020-04-28 10:40:48.933977', '2020-04-28 10:45:19.000000', NULL, NULL, NULL),
(122, NULL, NULL, NULL, 'Vachhani akhil Natvarlal', NULL, NULL, NULL, NULL, NULL, '$2a$08$6WYdR5gMQXybhdTwr3GGpeQIeQC5vfnSt4ifeTaVj3cc.EkEHQpqG', 'vachhaniakhil@gmail.com', 0, '+91', '7567258187', '4502', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 10:49:44.288197', '2020-04-28 10:49:58.000000', NULL, NULL, NULL),
(123, NULL, NULL, NULL, 'Abhishek Kumar', 'uploads/avatars/123-1588074581407.png', 'Navin Kumar Singh', 'Babita singh', 'male', '2003-08-19', '$2a$08$79jWIB2D03l27bEK9FMg7OVm30HBJnVjeE0j3X04xiJJcmFaKIRB.', 'anushka9472@gmail.com', 0, '+91', '8757237560', '1755', 1, 0, 'STUDENT', NULL, 'Others', 2, '2020-04-28 11:46:54.265426', '2020-04-28 11:52:59.000000', NULL, NULL, NULL),
(124, NULL, NULL, NULL, 'Sagar yadav', NULL, NULL, NULL, NULL, NULL, '$2a$08$aY4kXNN4nB.LYTD8Oncs9.KLKKBY1XoWMTWFeilXIKUyL1iDt89GC', 'yada9075@gmail.com', 0, '+91', '6264329824', '9465', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 11:54:56.937629', '2020-04-28 11:55:29.000000', NULL, NULL, NULL),
(125, NULL, NULL, NULL, 'Sk merajul', 'uploads/avatars/125-1588075981308.png', NULL, NULL, NULL, NULL, '$2a$08$6TG8VXR/FjjpljyD5Qp/De/hAiU8FX6WzCs/8iHZge/OIiVdnOBQW', 'smerajul682@gmil', 0, '+91', '7384705523', '3559', 1, 0, 'STUDENT', NULL, NULL, 1, '2020-04-28 12:09:20.540498', '2020-04-28 12:13:04.000000', NULL, NULL, NULL),
(126, NULL, NULL, NULL, 'Surojit Dutta', NULL, NULL, NULL, NULL, NULL, '$2a$08$HcMxcymAlE65fwNFbE4Wv.DFnrnO8QzdsMMsNuUq1LNq25GQcP4Nu', 'd2345pss@gmail.com', 0, '+91', '8981317142', '3730', 1, 0, 'STUDENT', NULL, NULL, 2, '2020-04-28 12:23:50.500789', '2020-04-28 12:24:07.000000', NULL, NULL, NULL),
(130, NULL, NULL, NULL, 'Abhijeet Salunkhe', 'uploads/avatars/130-1588486510221.png', 'Vilas Salunkhe', 'Shobha', 'male', '1991-12-18', '$2a$08$Kw/NUWqe4lJ.Tf0iLxVtKe2ccYjqVsREiS3OGN1S8joaWNUpaJhDm', 'abhijeet@gmail.com', 0, '+91', '9867884356', '9598', 1, 0, 'STUDENT', NULL, 'General', 3, '2020-05-03 11:32:15.153883', '2020-05-03 11:45:49.000000', '9867884335', '454545', 'Hindu'),
(131, NULL, NULL, NULL, 'Abhijeet Salunkhe', 'uploads/avatars/131-1588522625454.png', 'Vilas Salunkhe', 'Shobha', 'male', '1991-12-18', '$2a$08$OdCsXIzqXzDU1/HQNmtaK.M9CI8KZ3v7bKb.Y2DXpjD.lFyPUmcee', 'abhijeetwebdev@gmail.com', 0, '+91', '9867884320', '8683', 1, 0, 'STUDENT', NULL, 'General', 3, '2020-05-03 21:46:35.186658', '2020-05-03 21:47:47.000000', '9898989898', '454545', 'Hindu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressId`);

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`answerId`),
  ADD UNIQUE KEY `IDX_ea914e5b86b1af5b8f2ea9d32a` (`examId`,`answerId`,`questionId`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`examId`);

--
-- Indexes for table `input_field`
--
ALTER TABLE `input_field`
  ADD PRIMARY KEY (`inputFieldId`);

--
-- Indexes for table `institute`
--
ALTER TABLE `institute`
  ADD PRIMARY KEY (`instituteId`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`languageId`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notificationId`);

--
-- Indexes for table `option`
--
ALTER TABLE `option`
  ADD PRIMARY KEY (`optionId`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentId`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`questionId`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`resultId`);

--
-- Indexes for table `scholarship`
--
ALTER TABLE `scholarship`
  ADD PRIMARY KEY (`scholarshipId`);

--
-- Indexes for table `university`
--
ALTER TABLE `university`
  ADD PRIMARY KEY (`universityId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `IDX_091e3ae299cb5e9b801debf29c` (`username`,`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `answerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `examId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `input_field`
--
ALTER TABLE `input_field`
  MODIFY `inputFieldId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `institute`
--
ALTER TABLE `institute`
  MODIFY `instituteId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `languageId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notificationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=272;

--
-- AUTO_INCREMENT for table `option`
--
ALTER TABLE `option`
  MODIFY `optionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `questionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `resultId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `scholarship`
--
ALTER TABLE `scholarship`
  MODIFY `scholarshipId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `university`
--
ALTER TABLE `university`
  MODIFY `universityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
