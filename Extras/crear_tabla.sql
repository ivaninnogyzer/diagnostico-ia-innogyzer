-- ══════════════════════════════════════════════════════════════
-- INNOGYZER — Diagnóstico de Necesidades IA
-- Script de creación de tabla MySQL
--
-- INSTRUCCIONES (cPanel):
--   1. Ve a cPanel → MySQL Databases
--   2. Crea una base de datos llamada:  innogyze_diagnostico
--   3. Crea un usuario MySQL:           innogyze_iauser
--   4. Asígnale todos los privilegios a esa base de datos
--   5. Ve a phpMyAdmin → selecciona innogyze_diagnostico
--   6. Clic en "SQL" y pega este script → Ejecutar
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS `diagnosticos` (
  `id`                    INT UNSIGNED     NOT NULL AUTO_INCREMENT,

  -- Datos de contacto
  `empresa`               VARCHAR(200)     NOT NULL,
  `nombre`                VARCHAR(200)     NOT NULL,
  `email`                 VARCHAR(200)     NOT NULL,
  `whatsapp`              VARCHAR(50)      DEFAULT NULL,
  `fecha`                 DATE             DEFAULT NULL COMMENT 'Fecha seleccionada por el usuario al llenar el formulario',
  `industria`             VARCHAR(100)     DEFAULT NULL,

  -- Sección 2: Situación actual
  `gen_leads`             TEXT             DEFAULT NULL COMMENT 'Checkboxes: cómo generan leads hoy',
  `nivel_automatizacion`  VARCHAR(50)      DEFAULT NULL,
  `vol_leads`             VARCHAR(50)      DEFAULT NULL,
  `tasa_conversion`       VARCHAR(50)      DEFAULT NULL,
  `herramientas_actuales` VARCHAR(300)     DEFAULT NULL,
  `inversion_pauta`       VARCHAR(100)     DEFAULT NULL,

  -- Sección 3: Retos y oportunidades
  `problemas`             TEXT             DEFAULT NULL COMMENT 'Checkboxes: hasta 3 problemas',
  `oportunidades`         TEXT             DEFAULT NULL COMMENT 'Checkboxes: oportunidades con IA',
  `vision_propia`         TEXT             DEFAULT NULL COMMENT 'Campo abierto: visión del cliente',

  -- Sección 4: Solución en mente
  `tipo_solucion`         TEXT             DEFAULT NULL COMMENT 'Checkboxes: tipo de solución buscada',
  `integraciones`         TEXT             DEFAULT NULL COMMENT 'Checkboxes: integraciones requeridas',
  `kpis`                  TEXT             DEFAULT NULL COMMENT 'Checkboxes: KPIs de éxito',
  `rango_inversion`       VARCHAR(100)     DEFAULT NULL,
  `horizonte`             VARCHAR(100)     DEFAULT NULL,

  -- Sección 5: Contexto y siguientes pasos
  `urgencia`              VARCHAR(20)      DEFAULT NULL COMMENT 'alta / media / baja',
  `decisor`               VARCHAR(200)     DEFAULT NULL,
  `otros_proveedores`     VARCHAR(200)     DEFAULT NULL,
  `siguiente_paso`        VARCHAR(50)      DEFAULT NULL,
  `notas_adicionales`     TEXT             DEFAULT NULL,
  `fuente`                VARCHAR(100)     DEFAULT NULL COMMENT 'Cómo llegó a Innogyzer',

  -- Sección 6: Contexto de IA (opcional)
  `tipo_apoyo`            TEXT             DEFAULT NULL COMMENT 'Checkboxes: licencias | solucion | no_seguro',
  `ia_experiencia_actual` VARCHAR(50)      DEFAULT NULL COMMENT 'Punto de partida en IA del cliente',

  -- Metadatos
  `ip_origen`             VARCHAR(45)      DEFAULT NULL,
  `fecha_envio`           DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `revisado`              TINYINT(1)       NOT NULL DEFAULT 0 COMMENT '0=nuevo, 1=revisado',
  `notas_internas`        TEXT             DEFAULT NULL COMMENT 'Uso interno de Innogyzer',

  PRIMARY KEY (`id`),
  INDEX `idx_email`       (`email`),
  INDEX `idx_empresa`     (`empresa`),
  INDEX `idx_urgencia`    (`urgencia`),
  INDEX `idx_fecha`       (`fecha_envio`),
  INDEX `idx_revisado`    (`revisado`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Diagnósticos de necesidades IA recibidos desde innogyzer.com';
