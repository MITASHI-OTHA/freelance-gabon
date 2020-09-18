-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mar. 25 juin 2019 à 13:43
-- Version du serveur :  5.5.61-cll
-- Version de PHP :  7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ezruxrzw_freelance`
--

-- --------------------------------------------------------

--
-- Structure de la table `boots`
--

CREATE TABLE `boots` (
  `idFree` int(11) NOT NULL,
  `idRecru` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `boots`
--

INSERT INTO `boots` (`idFree`, `idRecru`) VALUES
(52, 4),
(52, 16),
(88, 23);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `ids` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `couleur` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`ids`, `libelle`, `couleur`) VALUES
(1, 'Administration de serveurs', '#A10684'),
(2, 'Agriculture', '#7FDD4C'),
(3, 'Android', '#1E7FCB'),
(4, 'Animation 3D', '#884DA7'),
(5, 'Agronomie', '#AE642D'),
(6, 'Architecture', '#0000FF'),
(7, 'Bases de données', '#6050DC'),
(8, 'Autre', '#FCDC12	'),
(9, 'Batiment', '#6050DC'),
(10, 'Blogging', '#FF5E4D'),
(11, 'Boucherie', '#BB0B0B'),
(12, 'Bureautique', '#FF5E4D'),
(13, 'CMS', '#DB1702'),
(14, 'Chaudronnerie', '#00FFFF'),
(15, 'Climatisation', '#E73E01'),
(16, 'Coaching', '#00FFFF'),
(17, 'Coiffure', '#FF69B4'),
(18, 'Communication', '#01D758'),
(19, 'Commerce', '#FFFF6B'),
(20, 'Composition musicale', '#C72C48'),
(21, 'Comptabilité', '#649B88'),
(22, 'Consulting', '#C9A0DC'),
(23, 'Création sites web', '#D2CAEC'),
(24, 'Cuisine', '#FF6F7D'),
(25, 'Design', '#791CF8'),
(26, 'Design d\'interieur', 'rgb(119, 119, 30)'),
(27, 'Développement logiciels', '#C7CF00'),
(28, 'Développement web', '#26619C'),
(29, 'Développement app mobile', '#8F5922'),
(30, 'Droit', '#9683EC'),
(31, 'Enseignement', '#AC1E44'),
(32, 'E-Commerce', '#FF00FF'),
(33, 'Electricité', '#DB0073'),
(34, 'Evenementielle', '#800080	'),
(35, 'Esthétique', '#FFDE75'),
(36, 'Fer forger', '#1FA055'),
(37, 'Evenementiel', '#FEA347'),
(38, 'Finances', '#03224C'),
(39, 'Formation', '#582900'),
(40, 'Genie Ã¨lectrique', '#B3B191'),
(41, 'Genie civil', '#D473D4'),
(42, 'Génie civil', '#DE9816'),
(43, 'Infirmerie', '#16B84E'),
(44, 'Genie Electronique', '#54F98D'),
(45, 'Génie mécanique', '#DAB30A'),
(46, 'Genie mechanique', '#87591A'),
(47, 'Ingenierie', '#000000'),
(48, 'Infographie', '#FC5D5D'),
(49, 'Jardinage', '#955628'),
(50, 'Maintenance informatique', '#DD985C'),
(51, 'Linux', '#DFAF2C'),
(52, 'Maintenance rÃ©seaux informatique', '#F2FFFF'),
(53, 'MaÃ§onnerie', '#FFD700'),
(54, 'Maintenance Electronique', '#FCD21C'),
(55, 'Maintenance réseaux Electrique', '#CFA0E9'),
(56, 'Maintenance réseaux téléphonique', '#56739A	'),
(57, 'Marketing', '#CCCCFF	'),
(58, 'Maintenance téléphones', '#BEF574'),
(59, 'Médecine', '#FAF0C5'),
(60, 'Mixage audio', '#798081'),
(61, 'Marketing en ligne', '#B67823'),
(62, 'Montage vidÃ©os', '#C60800'),
(63, 'Menuiserie', '#FD6C9E'),
(64, 'Nettoyage', '#FF5E4D'),
(65, 'Musique', '#01D758'),
(66, 'Oracle', '#0131B4'),
(67, 'Mysql', '#850606	'),
(68, 'Notariat', '#008E8E	'),
(69, 'Photographie', '#F88E55'),
(70, 'Ponts et chaussées', '#149414'),
(71, 'Peinture', '#01D758'),
(72, 'Presse', '#FFFF6B'),
(73, 'Programmation', '#25FDE9	'),
(74, 'Plomberie', '#FAEA73'),
(75, 'Publicité', '#FF7F00'),
(76, 'Publicité en ligne', '#9F551E'),
(77, 'Rédaction Arcticles', '#E1CE9A'),
(78, 'Réferencement Web (SEO)', '#E9C9B1'),
(79, 'Rédaction Articles', '#FF0921	'),
(80, 'Restauration', '#DB1702'),
(81, 'Sécurité et gardiennage', '#660099'),
(82, 'Réseaux sociaux', '#A10684'),
(83, 'Soudure', '#40826D'),
(84, 'Vente', '#83A697'),
(85, 'Tourisme', '#34C924'),
(86, 'Web Design', '#6C0277'),
(87, 'Traduction', '#DF73FF'),
(88, 'Website Project Management', '#649B88'),
(89, 'Website QA', '#F7FF3C'),
(90, 'Wordpress', '#00CCCB'),
(91, 'Yoga', '#0F056B'),
(94, 'Combat', '#0F056B');

-- --------------------------------------------------------

--
-- Structure de la table `competences`
--

CREATE TABLE `competences` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `competences`
--

INSERT INTO `competences` (`id`, `libelle`) VALUES
(1, '.Net'),
(2, 'Administration de serveurs'),
(3, 'Active Directory'),
(4, 'Agronomie'),
(5, 'Agriculture'),
(6, 'AJAX'),
(7, 'Allemand'),
(8, 'Android'),
(9, 'Anglais'),
(10, 'Animation 3D'),
(11, 'Apache'),
(12, 'Arabe'),
(13, 'Architecture'),
(14, 'Architecture SOA'),
(15, 'ASP'),
(16, 'Bases de donnÃ©es'),
(17, 'Autre'),
(18, 'BÃ¢timent'),
(19, 'Bing Ads'),
(20, 'Biologie'),
(21, 'Blogging'),
(22, 'bootstrap'),
(23, 'Boucherie'),
(24, 'C'),
(25, 'Bureautique'),
(26, 'C++'),
(27, 'C#'),
(28, 'CAF'),
(29, 'Chaudronnerie'),
(30, 'Chimie'),
(31, 'Cisco'),
(32, 'Chinois'),
(33, 'Citrix â€“ XenDesktop'),
(34, 'Citrix'),
(35, 'Climatisation'),
(36, 'Cloud Architecture'),
(37, 'CMMI'),
(38, 'CMS'),
(39, 'Coaching'),
(40, 'Coiffure'),
(41, 'Commerce'),
(42, 'Composition musicale'),
(43, 'ComptabilitÃ©'),
(44, 'Copywriting'),
(45, 'CSS'),
(46, 'Consulting'),
(47, 'CSS3'),
(48, 'CrÃ©ation sites web'),
(49, 'Cuisine Chinoise'),
(50, 'Cuisine FranÃ§aise'),
(51, 'Cuisine Italienne'),
(52, 'Cuisine Japonaise'),
(53, 'Design'),
(54, 'Design dâ€™interieur'),
(55, 'Dev. app. mobile'),
(56, 'DÃ©veloppement logiciels'),
(57, 'Cuisine Gabonaise'),
(58, 'Delphi'),
(59, 'DÃ©veloppement web'),
(60, 'DHCP'),
(61, 'Diagnostic et Monitoring des serveurs dâ€™applications'),
(62, 'DNS'),
(63, 'Droit'),
(64, 'E-Commerce'),
(65, 'Ã‰lectricitÃ©'),
(66, 'EMC Avamar'),
(67, 'Drupal'),
(68, 'EMC Data Domain'),
(69, 'EMC RecoverPoint'),
(70, 'EMC VPLEX'),
(71, 'Enseignement'),
(72, 'ESCALA Hardware'),
(73, 'Espagnol'),
(74, 'Esthétique'),
(75, 'Escala P8'),
(76, 'ETOM'),
(77, 'Evenementielle'),
(78, 'Excel'),
(79, 'Facebook'),
(80, 'Facebook Ads'),
(81, 'Finances'),
(82, 'Firewalls'),
(83, 'Fer forger'),
(84, 'Flash'),
(85, 'Flash animations'),
(86, 'Français'),
(87, 'Génie civil'),
(88, 'Gestion de Projets'),
(89, 'Google Adwords'),
(90, 'Graphic Design'),
(91, 'Ghostwriting'),
(92, 'HTML'),
(93, 'HTML5'),
(94, 'IBM Lotus'),
(95, 'Infirmerie'),
(96, 'Infographie'),
(97, 'iOS'),
(98, 'ISO 9001 Foundation'),
(99, 'Internet Marketing'),
(100, 'Italien'),
(101, 'J2E'),
(102, 'Japonais'),
(103, 'Java'),
(104, 'Java script'),
(105, 'Joomla'),
(106, 'Jquery'),
(107, 'JAVA/J2EE'),
(108, 'Link Building'),
(109, 'Linux'),
(110, 'Linux centos'),
(111, 'Linux redhat'),
(112, 'Linux Ubuntu'),
(113, 'Logiciel autocad'),
(114, 'Logiciel sage'),
(115, 'Logiciel Archicad'),
(116, 'MaÃ§onnerie'),
(117, 'magento'),
(118, 'Maintenance Ã©lectronique'),
(119, 'Maintenance informatique'),
(120, 'Maintenance rÃ©seaux Ã©lectrique'),
(121, 'Maintenance rÃ©seaux informatique'),
(122, 'Maintenance tÃ©lÃ©phones'),
(123, 'Management Projet'),
(124, 'Maintenance rÃ©seaux tÃ©lÃ©phonique'),
(125, 'Management Transversal'),
(126, 'Management Transversal Diagnostic et Monitoring des serveurs dâ€™applications JAVA/J2EE Salesforce ETOM Oracle DB Tuning'),
(127, 'Marketing'),
(128, 'Marketing en ligne'),
(129, 'Mathematiques'),
(130, 'Medecine'),
(131, 'Menuiserie'),
(132, 'Merise'),
(133, 'Microsoft Access'),
(134, 'Microsoft Excel'),
(135, 'Microsoft office'),
(136, 'Microsoft Outlook'),
(137, 'Microsoft powerpoint'),
(138, 'Microsoft Word'),
(139, 'Mixage audio'),
(140, 'Montage vidÃ©os'),
(141, 'Microsoft Publisher'),
(142, 'MVC'),
(143, 'MySql'),
(144, 'MYSQL : Administration'),
(145, 'Nettoyage'),
(146, 'Nginx'),
(147, 'Notariat'),
(148, 'Oracle'),
(149, 'Oracle DB Tuning'),
(150, 'Oracle SOA Suite'),
(151, 'Other Skills'),
(152, 'Peinture'),
(153, 'Perl'),
(154, 'Photographie'),
(155, 'Photoshop'),
(156, 'PHP'),
(157, 'Physique'),
(158, 'Plomberie'),
(159, 'PostgreSQL'),
(160, 'Presse'),
(161, 'Pretashop'),
(162, 'Publicité'),
(163, 'Publicité en ligne'),
(164, 'Python'),
(165, 'QA'),
(166, 'Redaction Arcticles'),
(167, 'Raferencement Web (seo)'),
(168, 'Reseaux sociaux'),
(169, 'Restauration'),
(170, 'Salesforce'),
(171, 'Sciences de la terre'),
(172, 'Sécurité et gardiennage'),
(173, 'SEO'),
(174, 'Software Testing'),
(175, 'Soudure'),
(176, 'SQL'),
(177, 'Testing / QA'),
(178, 'TMFORUM'),
(179, 'Tourisme'),
(180, 'Traduction'),
(181, 'UI/IA'),
(182, 'Usability Testing'),
(183, 'User Experience Design'),
(184, 'User Interface / IA'),
(185, 'UX/UI Design'),
(186, 'VCE Vblock Systems'),
(187, 'Vente'),
(188, 'VMAX'),
(189, 'VMWARE'),
(190, 'VMware Site Recovery Manager'),
(191, 'VMWare View'),
(192, 'VxRAIL'),
(193, 'Webmethods : BPM/ESB'),
(194, 'Website Design'),
(195, 'Website hosting'),
(196, 'website Management'),
(197, 'Website testing'),
(198, 'Windows'),
(199, 'Windows 10'),
(200, 'Windows 7'),
(201, 'Windows 8'),
(202, 'Windows server 2003'),
(203, 'Windows server 2012'),
(204, 'Wordpress'),
(205, 'Karaté'),
(206, 'kung fu'),
(207, ''),
(208, ''),
(209, ''),
(210, ''),
(211, ''),
(212, ''),
(213, ''),
(214, ''),
(215, ''),
(216, ''),
(217, ''),
(218, ''),
(219, ''),
(220, ''),
(221, ''),
(222, ''),
(223, ''),
(224, ''),
(225, ''),
(226, ''),
(227, ''),
(228, ''),
(229, ''),
(230, ''),
(231, ''),
(232, ''),
(233, ''),
(234, ''),
(235, ''),
(236, ''),
(237, ''),
(238, ''),
(239, ''),
(240, ''),
(241, ''),
(242, ''),
(243, ''),
(244, ''),
(245, ''),
(246, ''),
(247, ''),
(248, ''),
(249, ''),
(250, ''),
(251, ''),
(252, ''),
(253, ''),
(254, ''),
(255, ''),
(256, ''),
(257, ''),
(258, ''),
(259, ''),
(260, ''),
(261, ''),
(262, ''),
(263, ''),
(264, ''),
(265, ''),
(266, ''),
(267, ''),
(268, ''),
(269, ''),
(270, ''),
(271, ''),
(272, ''),
(273, ''),
(274, ''),
(275, ''),
(276, ''),
(277, ''),
(278, ''),
(279, ''),
(280, ''),
(281, ''),
(282, ''),
(283, ''),
(284, ''),
(285, ''),
(286, ''),
(287, ''),
(288, ''),
(289, ''),
(290, ''),
(291, ''),
(292, ''),
(293, ''),
(294, ''),
(295, '');

-- --------------------------------------------------------

--
-- Structure de la table `devis`
--

CREATE TABLE `devis` (
  `id` int(11) NOT NULL,
  `IDprojet` int(11) NOT NULL,
  `iDfree` int(11) NOT NULL,
  `date_post` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `temps` varchar(255) NOT NULL,
  `prix` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `devis`
--

INSERT INTO `devis` (`id`, `IDprojet`, `iDfree`, `date_post`, `status`, `temps`, `prix`) VALUES
(2, 28, 52, 'mercredi 18 juillet Ã  21:05', 'en cours', '4 heure', '1000'),
(3, 23, 52, 'mercredi 18 juillet Ã  21:10', 'en cours', '4 heure', '10000'),
(4, 28, 74, 'mardi 31 juillet Ã  22:16', 'en cours', '1 heure', '10000'),
(5, 23, 72, 'vendredi 10 aoÃ»t Ã  00:53', 'en cours', '30 jour', '5000'),
(6, 7, 66, 'mardi 14 aoÃ»t Ã  15:53', 'en cours', '1 jour', '3000');

-- --------------------------------------------------------

--
-- Structure de la table `employeurs`
--

CREATE TABLE `employeurs` (
  `id_EMP` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `inscription` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `skill` int(11) DEFAULT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `employeurs`
--

INSERT INTO `employeurs` (`id_EMP`, `nom`, `ville`, `email`, `inscription`, `password`, `skill`, `photo`) VALUES
(1, 'mabika', 'Libreville', 'dcs@gmail.com', '23 juillet 2018', '1234', NULL, ''),
(2, 'dougaka', 'Portgentilk', 'daoudoua@gmail.com', '30 Avril 2015', '1234', 1, ''),
(3, 'podrigue', 'Lambaréné', 'Rod@gmail.com', '01 avril 2014', '1234', NULL, ''),
(4, 'hildas', 'Libreville', 'bbbb@gmail.com', '09 07 2018', '1234', 1, ''),
(5, 'toto', 'Moila', 'toto@gmail.com', '', '1234', NULL, ''),
(16, 'Luck', 'Akanda', 'yahanthony@gmail.com', 'dimanche 15 juillet Ã  00:12', '1234', 1, 'https://freelance-gabon.com/src/avatars/12-54-03amblob.png'),
(21, ' Tougsone photographie', 'Libreville', 'lafleurtougsone@gmail.com', 'jeudi 26 juillet Ã  14:57', 'william', 1, 'https://freelance-gabon.com/src/avatars/default.png'),
(20, 'babel', 'Kango', 'bab@gmail.com', 'jeudi 26 juillet Ã  00:28', '1234', 1, 'https://freelance-gabon.com/src/avatars/default.png'),
(22, 'Oggy', NULL, 'oggy@gmail', 'mercredi 15 aoÃ»t Ã  17:27', '1234', NULL, 'https://freelance-gabon.com/src/avatars/default.png'),
(23, 'Mayukwa Nathan Hary', 'Libreville', 'harydeveloppeur@gmail.com', 'mercredi 07 novembre Ã  20:06', 'Dieuestcapable', 1, 'https://freelance-gabon.com/src/avatars/default.png'),
(24, 'me', NULL, 'me@gmail.com', 'samedi 10 novembre Ã  11:54', '1234', 1, 'https://freelance-gabon.com/src/avatars/default.png'),
(25, 'Rafael CHAVEZ', NULL, 'contact.cce@pnuecanada.org', 'mercredi 30 janvier Ã  09:16', 'Rafael@123', NULL, 'https://freelance-gabon.com/src/avatars/default.png'),
(26, 'tokault ike', NULL, 'rtokault@gmail.com', 'jeudi 11 avril Ã  09:14', 'Mamoubrigitte1', NULL, 'https://freelance-gabon.com/src/avatars/default.png');

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `Autor` int(11) NOT NULL,
  `idProjet` int(11) NOT NULL,
  `idFree` int(11) NOT NULL,
  `dates` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `Autor`, `idProjet`, `idFree`, `dates`) VALUES
(1, 16, 28, 5, 'jeudi 19 juillet Ã  00:36'),
(2, 16, 23, 5, 'jeudi 19 juillet Ã  00:39'),
(3, 16, 23, 52, 'jeudi 19 juillet Ã  23:10');

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

CREATE TABLE `projets` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Auteur` int(25) DEFAULT NULL,
  `dates` text NOT NULL,
  `budget` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `categorie` int(11) NOT NULL,
  `devis` int(11) NOT NULL,
  `description` text NOT NULL,
  `relatif` varchar(255) NOT NULL,
  `etat` int(11) DEFAULT '0',
  `file` text,
  `competences` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`id`, `titre`, `Auteur`, `dates`, `budget`, `type`, `categorie`, `devis`, `description`, `relatif`, `etat`, `file`, `competences`) VALUES
(1, 'Developper app Android', 1, '03-02-15', '5000', 'Distance', 1, 3, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(3, 'Creer un site web E-commerce', 5, '09-03-18', '2000', 'sur place', 18, 0, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(7, 'Cherche developpeur Scala', 5, '09-03-20', '1000', 'sur place', 33, 1, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(4, 'Mettre en place une API', 4, '15-10-18', '25000', 'Distance', 45, 4, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(5, 'Charge de clientele', 3, 'mars 20 2018', '10 000', 'distance', 8, 8, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(6, 'App Hybride', 5, 'Jeu 20 11', '20 000', 'sur place', 5, 4, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(8, 'Cherche mathématicien expert', 5, '15-03-20', '2000', 'sur place', 6, 6, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(9, 'Reparteur telephone', 5, '25-23-20', '5000', 'sur place', 12, 0, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(11, 'Cherche jeune photographe', 1, '10-23-20', '3000', 'sur place', 35, 3, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-02-10 16:26:51', 0, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(23, 'SUPER PROJET', 16, '10-23-20', '1000', 'sur place', 7, 2, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-07-15 15:46:37', 1, '', 'Active Directory,AgrÃ©culture,AJAX,Allemand'),
(28, 'transformer un fichier Buildbox a APK', 16, 'mercredi 18 juillet Ã  20:37', '1000', 'Sur place', 2, 2, 'Ceci est un projet automatique generé par le site Freelance GA en raison de son lancement. Ne posez aucun devis.', '2018-07-18 20:37:32', 2, '', 'AgrÃ©culture,Administration de serveurs,Allemand');

-- --------------------------------------------------------

--
-- Structure de la table `projets-postule`
--

CREATE TABLE `projets-postule` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `ID_proj` int(11) NOT NULL,
  `datesPub` varchar(255) NOT NULL,
  `etat` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projets-postule`
--

INSERT INTO `projets-postule` (`id`, `user`, `ID_proj`, `datesPub`, `etat`) VALUES
(4, 2, 2, '2018-02-10 16:26:51', 'tyutyu');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photo` text,
  `specialite` text,
  `inscription` varchar(255) DEFAULT NULL,
  `evaluation` int(11) DEFAULT NULL,
  `password` text,
  `skill` int(11) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `percent` int(11) DEFAULT NULL,
  `prix` varchar(255) DEFAULT NULL,
  `categorie` text,
  `apropos` text,
  `experience` int(11) DEFAULT NULL,
  `metier` varchar(255) DEFAULT NULL,
  `dispo` int(11) DEFAULT NULL,
  `tuto` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `email`, `photo`, `specialite`, `inscription`, `evaluation`, `password`, `skill`, `ville`, `percent`, `prix`, `categorie`, `apropos`, `experience`, `metier`, `dispo`, `tuto`, `year`) VALUES
(77, 'Tangui EDOU', 'ridge.edou@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'dimanche 05 aoÃ»t Ã  22:03', NULL, 'forester1992', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2018),
(2, 'Dina', 'diana@xmail.com', 'https://freelance-gabon.com/src/avatars/eve.png', 'Developpement, Photoshop, WebDesign, Cordova', '20 Avril 2012', 2, '1234', 1, 'Libreville', 100, '15000 Fcfa /jour', '1', '', 0, 'Developpeur', 0, NULL, 2018),
(3, 'Molly', 'molly@xmail.com', 'https://freelance-gabon.com/src/avatars/veronika.jpg', 'Developpement, Photoshop, WebDesign, Cordova', '13 Aout 2017', 3, '1234', 1, 'Mouila', 100, '15000 Fcfa /jour', '5', '', 0, 'Developpeur', 1, NULL, 2018),
(4, 'Dona', 'Dona@gmail.com', 'https://freelance-gabon.com/src/avatars/daniel.jpg', 'Developpement, Photoshop, WebDesign, Cordova', '05 Mai 2011', 1, '1234', 1, 'Lambaréné', 100, '15000 Fcfa /jour', '10', '', 0, 'Developpeur', 1, 1, 2018),
(52, 'Steeve', 'sawyer@gmail.fr', 'https://freelance-gabon.com/src/avatars/home-avatar.png', 'Active Directory,Agronomie,AgrÃ©culture,AJAX', 'vendredi 13 juillet Ã  21:14', 3, '1234', 1, 'Libreville', 100, '2000 Fcfa /heure', '1', '<p>Je suis cool et <strong>sympas, i am a </strong><a href=\"https://www.malt.fr\" target=\"_blank\"><strong>boos</strong></a></p>', 3, 'Marketeur', NULL, NULL, 2018),
(103, 'junior', 'mboudi@gmail.fr', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mardi 29 janvier Ã  12:35', NULL, '1234', NULL, 'Port-Gentil', 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(104, 'Stevie', 'Steviejulian@yahoo.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mardi 29 janvier Ã  16:30', NULL, 'julienne', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(105, 'MOUKOUANGUI MANGUI B', 'bmangui@ymail.com', 'https://freelance-gabon.com/src/avatars/default.png', 'Cisco,Bases de donnÃ©es,DÃ©veloppement app mobile,Infographie', 'dimanche 10 fÃ©vrier Ã  12:28', NULL, 'Moi@@1993', 1, 'Libreville', 100, '15000 Fcfa /Jour', '47', '<p>TOUT ce qui est lié au NTIC</p>', 2, 'Ingenieur en administration rÃ©seaux', 1, 1, NULL),
(55, 'Fake user', 'sam@gmail.com', 'https://freelance-gabon.com/src/avatars/joe.jpg', 'Agronomie', 'vendredi 20 juillet Ã  01:06', NULL, '1234', 1, 'Port-Gentil', 100, '5000 Fcfa /Semaine', '5', '<p>MDR</p>', 1, 'Mecano', 0, 1, 2018),
(56, 'Mark Zuck', 'mark@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', '.Net,Agronomie,Allemand', 'samedi 21 juillet Ã  16:51', NULL, '1234', 1, 'Port-Gentil', 100, '10000 Fcfa /heure', '3', '<p>hey les gens !</p>', 2, 'Infographiste', NULL, NULL, 2018),
(89, 'GÃ©rald BOUSSOUGOU', 'geraldboussougou@gmail.com', 'https://freelance-gabon.com/src/avatars/09-20-03amblob.png', 'Facebook Ads,Infographie,Photoshop,PublicitÃ© en ligne', 'jeudi 11 octobre Ã  09:15', NULL, 'GÃ©rald', 1, 'Libreville', 50, '3000 Fcfa /heure', '46', '<p>Prix en fonction du type de travail... </p>', 8, 'Infographiste - Community Manager', 1, NULL, 2018),
(59, 'Bernice', 'mayombo@gmail.fr', 'https://freelance-gabon.com/src/avatars/ade.jpg', 'AgrÃ©culture,Administration de serveurs', 'samedi 21 juillet Ã  18:59', NULL, '1234', 1, 'Akanda', 100, '3000 Fcfa /heure', '1', '<div class=\"markdown secondary u-mb0 profile-description\" data-js=\"readmore\" data-jsinit=\"readmore\">\r\n            Vous voulez réaliser :<br>du brand content ;<br>une vidéo événementielle ;<br>un film corporate ;<br>des interviews clients ou d\'équipe ;<br>une vidéo originale.<br><br>Je suis réalisateur, cadreur, monteur pour Morpho Productions, toujours avide de défis et de nouvelles expériences.<br>Contactez moi pour discuter de votre projet !\r\n        </div>', 5, 'Babysitter', NULL, NULL, 2018),
(60, 'cedric', 'cedric@gmail.com', 'https://freelance-gabon.com/src/avatars/chris.jpg', 'DÃ©veloppement web', 'samedi 21 juillet Ã  19:35', NULL, '1234', 1, 'La Lopée', 100, '5000 Fcfa /jour', '26', '<p>Developpement de vos App Web et mobil de A à Z. Mes Technos utilisées sont:&nbsp;<strong>LARAVEL 5, ANGULAR JS, ANGULAR, SYMPHONIE 5</strong></p>', 5, 'Developpeur Web', 1, NULL, 2018),
(107, 'Aymard BOUVOTO', 'contact.abcarsabon@mail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'jeudi 23 mai Ã  11:45', NULL, 'adminabcars', 1, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(106, 'Ngari Arnaud', 'jules.ngari@gmail.com', 'https://freelance-gabon.com/src/avatars/10-31-03pmblob.png', NULL, 'lundi 18 fÃ©vrier Ã  22:25', NULL, 'NDJOUMOU12', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(76, 'Bienvenu EKANG', 'bienvenuemane@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mercredi 01 aoÃ»t Ã  19:25', NULL, 'laTrinite', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 2018),
(75, 'NZOLO MINKO MICHEL', 'nzolomichel@yahoo.fr', 'https://freelance-gabon.com/src/avatars/default.png', 'CrÃ©ation sites web,Dev. app mobile,DÃ©veloppement web,Gestion de Projets', 'lundi 30 juillet Ã  17:23', NULL, 'michel1993', 1, 'Libreville', 100, '5000 Fcfa /heure', '28', '<p>Innovation, un mot qui me caractérise au mieux!</p>', 3, 'Analyste-Programmeur', 1, NULL, 2018),
(81, 'njifon ousseni', 'ousseni.njifon1@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', 'Administration de serveurs,Cloud Architecture,Enseignement', 'mercredi 29 aoÃ»t Ã  15:52', NULL, '10mars1991', 1, 'Libreville', 100, '1000 Fcfa /heure', '1', '<p>bien faire mon travail;</p>', 2, 'ingenieur securite reseau informatique', 1, NULL, 2018),
(86, 'vyconsultingGroupe', 'vyccam@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'vendredi 05 octobre Ã  00:54', NULL, 'swizz20GANG', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2018),
(88, 'GAKOU DISSAKI', 'aboubacar.dissakigakou@yahoo.fr', 'https://freelance-gabon.com/src/avatars/11-51-51amblob.png', 'Bureautique,Ã‰lectricitÃ©,Italien,Management Transversal', 'mercredi 10 octobre Ã  09:58', NULL, 'dini@9.fr', NULL, 'Port-Gentil', 100, '2000 Fcfa /heure', '1', '<p>Bonjour cher Mr et Dame,</p><p>je suis un jeune Gabonais dynamique qui relève les défi pour avoir des résultat convaincant pour le client  </p>', 5, 'HSE', 1, NULL, 2018),
(82, 'Mo*', 'pajmondjot@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'jeudi 20 septembre Ã  16:22', NULL, 'mass1978', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2018),
(83, 'MoDesign', 'mondjot69@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', 'Infographie,Internet Marketing,Photoshop,PublicitÃ© en ligne', 'jeudi 20 septembre Ã  16:37', NULL, 'mass1978', NULL, NULL, 50, '35000 Fcfa /Heure', '46', 'Conception et montage de visuels sur tout type de supports... facturation sur pack forfait après devis', 12, 'INFOGRAPHE', NULL, NULL, 2018),
(69, 'Kobina Kodjo', 'kobina2014@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', 'BÃ¢timent,MaÃ§onnerie,Menuiserie,Peinture,Plomberie', 'mercredi 25 juillet Ã  14:59', NULL, 'lefoux2014', 1, 'Libreville', 100, '25000 Fcfa /heure', '8', '<p>Specialisé dans le batiment nous vous offrons toutes une equipe de professionnel pour vos oeuvres et projets de construction.</p>', 6, 'Marketing', 1, NULL, 2018),
(68, 'Machino', 'branham.mouata@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mardi 24 juillet Ã  17:50', NULL, 'mbssbegs2908', 1, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, 1, NULL, 2018),
(70, 'Lennox Waldassen', 'Lennoxwaldassen@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', 'Maintenance rÃ©seaux informatique,Cisco,Anglais,Administration de serveurs', 'mercredi 25 juillet Ã  15:17', 3, 'the king james', 1, 'Libreville', 100, '2500 Fcfa /heure', '54', '<p>Prêt A Travailler</p>', 1, 'INFORMATICIEN & INGENIEUR EN SON', 1, NULL, 2018),
(71, 'Gontran LINDZONDZO', 'gontranmax@yahoo.fr', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mercredi 25 juillet Ã  15:35', NULL, 'Martine@16', 1, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, 1, NULL, 2018),
(72, 'OBIANG Robert', 'roveo_decha@hotmail.fr', 'https://freelance-gabon.com/src/avatars/05-06-55amblob.png', NULL, 'jeudi 26 juillet Ã  04:58', NULL, 'nelchie', 1, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, 1, NULL, 2018),
(73, 'Mayukwa Nathan Hary', 'harygamer95@gmail.com', 'https://freelance-gabon.com/src/avatars/01-48-59amblob.png', NULL, 'samedi 28 juillet Ã  01:47', NULL, 'residentevil5', 1, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2018),
(80, 'Freddy MADOUNGOU', 'freddman2usa@yahoo.fr', 'https://freelance-gabon.com/src/avatars/default.png', 'Droit,Microsoft office,Traduction,Autre', 'lundi 13 aoÃ»t Ã  18:51', NULL, 'chrismas2011', 1, 'Libreville', 100, '5000 Fcfa /heure', '20', '<p>Qualité rapide des services et à moindre coûts</p>', 3, 'Administrateur RH-Trilingue', 1, NULL, 2018),
(95, 'IngÃ©nieur QHSE', 'enrclbv@gmail.com', 'https://freelance-gabon.com/src/avatars/10-54-29amblob.png', 'Coaching,Gestion de Projets,ISO 9001 Foundation', 'lundi 05 novembre Ã  10:51', NULL, 'freelancer2019', 1, 'Libreville', 100, '97000 Fcfa /jour', '21', '<p>Assistance et/ou Accompagnement des entreprises dans la réalisation de leurs projets QHSE.</p>', 8, 'IngÃ©nieur QHSE/Auditrice IRCA ', 1, 1, 2018),
(97, 'test4', 'yahanthony8@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'lundi 05 novembre Ã  15:40', NULL, '1234', 1, 'Akanda', 50, NULL, NULL, NULL, NULL, NULL, 0, 1, 2018),
(98, 'Yvan LIMANDI ', 'yvanstephelimandi@gmail.com', 'https://freelance-gabon.com/src/avatars/11-17-35amblob.png', NULL, 'jeudi 08 novembre Ã  10:56', NULL, '123456', NULL, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, 1, 1, 2018),
(99, 'lionel ekome', 'ekome12@gmail.com', 'https://freelance-gabon.com/src/avatars/12-40-34pmblob.png', NULL, 'mardi 20 novembre Ã  12:39', NULL, 'lifetolife', NULL, 'Libreville', 50, NULL, NULL, NULL, NULL, NULL, 1, 1, 2018),
(100, 'Mboumba Ekouma Marys', 'Perlyka@gmail.com', 'https://freelance-gabon.com/src/avatars/default.png', NULL, 'mercredi 09 janvier Ã  15:40', NULL, '19872005', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 2019),
(108, 'David  MBOUMBA', 'davidstark062018@gmail.com', 'https://freelance-gabon.com/src/avatars/12-46-57pmblob.png', 'CMS,CrÃ©ation sites web,DÃ©veloppement web,SEO', 'jeudi 20 juin Ã  11:51', NULL, '0789mAMAN6289', 1, 'Libreville', 100, '3000 Fcfa /Heure', '28', '<h3><strong style=\"color: rgb(0, 0, 0);\">&nbsp;</strong><strong style=\"color: rgb(0, 128, 0);\">Je vous propose des tarifs</strong><strong style=\"color: rgb(0, 0, 0);\">&nbsp;plus compétitifs que les agences web car ayant des coûts de fonctionnements relativement moindres et ceci avec tout autant de rigueur et de professionnalisme</strong></h3><h3><br></h3><h2><br></h2>', 1, 'Webmaster / IngÃ©nieur CybersecuritÃ©', 1, 1, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ids`);

--
-- Index pour la table `competences`
--
ALTER TABLE `competences`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `devis`
--
ALTER TABLE `devis`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employeurs`
--
ALTER TABLE `employeurs`
  ADD PRIMARY KEY (`id_EMP`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projets-postule`
--
ALTER TABLE `projets-postule`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `ids` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT pour la table `competences`
--
ALTER TABLE `competences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=296;

--
-- AUTO_INCREMENT pour la table `devis`
--
ALTER TABLE `devis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `employeurs`
--
ALTER TABLE `employeurs`
  MODIFY `id_EMP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `projets`
--
ALTER TABLE `projets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `projets-postule`
--
ALTER TABLE `projets-postule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
