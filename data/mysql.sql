CREATE TABLE `commondisplay` (
  `serialDuplicated` int DEFAULT NULL,
  `patientId` int NOT NULL,
  `startDate` varchar(45) DEFAULT NULL,
  `DisplayName` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='to save duplicated display name';


CREATE TABLE `hospitals` (
  `hospitalNo` int NOT NULL,
  `hospitalName` varchar(100) DEFAULT NULL,
  `calculateDay` int DEFAULT NULL,
  PRIMARY KEY (`hospitalNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `keywords` (
  `key` int NOT NULL,
  `keyWord` varchar(45) DEFAULT NULL,
  `actualColumn` varchar(45) DEFAULT NULL,
  `source` int DEFAULT '1',
  `sort` int DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='this table to save keywords to link diffrent table with actual table.';

-- import these items

[{"key":2, "keyWord":"deceased", "actualColumn":"IsDead", "source":1, "sort":4},
 {"key":3, "keyWord":"gender", "actualColumn":"Gender", "source":1, "sort":8},
 {"key":7, "keyWord":"End", "actualColumn":"EndDate", "source":2, "sort":2},
 {"key":9, "keyWord":"decease", "actualColumn":"IsDead", "source":1, "sort":4},
 {"key":10, "keyWord":"dbo", "actualColumn":"BirthDate", "source":1, "sort":3},
 {"key":11, "keyWord":"First", "actualColumn":"FirstName", "source":1, "sort":7},
 {"key":12, "keyWord":"FName", "actualColumn":"FirstName", "source":1, "sort":7},
 {"key":13, "keyWord":"Last", "actualColumn":"LastName", "source":1, "sort":6},
 {"key":14, "keyWord":"LName", "actualColumn":"LastName", "source":1, "sort":6},
 {"key":16, "keyWord":"State", "actualColumn":"State", "source":1, "sort":11},
 {"key":17, "keyWord":"zip", "actualColumn":"ZipCode", "source":1, "sort":10},
 {"key":18, "keyWord":"city", "actualColumn":"City", "source":1, "sort":9},
 {"key":19, "keyWord":"dod", "actualColumn":"DeathDate", "source":1, "sort":5},
 {"key":20, "keyWord":"death", "actualColumn":"DeathDate", "source":1, "sort":5},
 {"key":21, "keyWord":"sex", "actualColumn":"Sex", "source":1, "sort":13},
 {"key":22, "keyWord":"id", "actualColumn":"PatientId", "source":1, "sort":1},
 {"key":23, "keyWord":"MRN", "actualColumn":"MRN", "source":1, "sort":2},
 {"key":24, "keyWord":"Address", "actualColumn":"Address", "source":1, "sort":12},
 {"key":25, "keyWord":"Modidied", "actualColumn":"lastModidiedDate", "source":1, "sort":14},
 {"key":26, "keyWord":"patientid", "actualColumn":"patientId", "source":2, "sort":1},
 {"key":27, "keyWord":"status", "actualColumn":"status", "source":2, "sort":3},
 {"key":28, "keyWord":"diagnoses", "actualColumn":"diagnoses", "source":2, "sort":4},
 {"key":29, "keyWord":"treatment", "actualColumn":"treatment", "source":2, "sort":5},
 {"key":30, "keyWord":"cycles", "actualColumn":"cycles", "source":2, "sort":6},
 {"key":31, "keyWord":"numberOfCycles", "actualColumn":"numberOfCycles", "source":2, "sort":7},
 {"key":32, "keyWord":"treatmentId", "actualColumn":"treatmentId", "source":2, "sort":8},
 {"key":33, "keyWord":"id", "actualColumn":"id", "source":2, "sort":9}]

-- 

 CREATE TABLE `patients` (
  `Id` varchar(45) DEFAULT NULL,
  `MRN` varchar(45) DEFAULT NULL,
  `BirthDate` varchar(45) DEFAULT NULL,
  `IsDead` varchar(45) DEFAULT NULL,
  `DeathDate` varchar(30) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `ZipCode` varchar(45) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Sex` varchar(45) DEFAULT NULL,
  `lastModidiedDate` varchar(45) DEFAULT NULL,
  `AddCol1` varchar(100) DEFAULT NULL,
  `AddCol2` varchar(100) DEFAULT NULL,
  `AddCol3` varchar(100) DEFAULT NULL,
  `AddCol4` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='save patints after processing. get revised patients';


 CREATE TABLE `treatment` (
  `id` varchar(45) NOT NULL,
  `endDate` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `diagnoses` varchar(45) DEFAULT NULL,
  `treatment` varchar(45) DEFAULT NULL,
  `cycles` varchar(45) DEFAULT NULL,
  `numberOfCycles` varchar(45) DEFAULT NULL,
  `cyclesXDays` varchar(45) DEFAULT NULL,
  `treatmentId` varchar(45) DEFAULT NULL,
  `serialDuplicated` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `uploadedfiles` (
  `fileName` varchar(500) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `hospitalCode` varchar(20) DEFAULT NULL,
  `uploadTime` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='to save files after upload';
