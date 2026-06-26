<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;background:#0A0A0B}
  *{box-sizing:border-box}
  @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  #dwrap input::placeholder,#dwrap textarea::placeholder{color:rgba(255,255,255,.28)}
  #dwrap input:focus,#dwrap select:focus,#dwrap textarea:focus{border-color:#48B4D8 !important;box-shadow:0 0 0 3px rgba(72,180,216,.16);background:#141418 !important}
  #dwrap select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:34px}
  #dwrap option{background:#18181D;color:#fff}
  #dwrap [data-opt]:has(input:checked){background:color-mix(in srgb,var(--acc) 15%,transparent)}
  #dwrap [data-opt]:has(input:checked) span{color:#fff;font-weight:500}
  @media(max-width:560px){#dwrap .two-col{grid-template-columns:1fr !important}}
</style>
</helmet>

<div id="dwrap" style="--bd:#2A2A31;--card:#16161A;--fg-1:#fff;--fg-2:rgba(255,255,255,.80);--fg-3:rgba(255,255,255,.52);--fg-4:rgba(255,255,255,.34);min-height:100vh;background:radial-gradient(125% 70% at 50% 0%,#171722 0%,#0A0A0B 55%);color:var(--fg-1);font-family:'Inter',system-ui,-apple-system,sans-serif;letter-spacing:-.005em;padding-bottom:64px;-webkit-font-smoothing:antialiased">

  <header style="position:sticky;top:0;z-index:100;background:rgba(11,11,13,.72);backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);border-bottom:1px solid var(--bd)">
    <div style="max-width:800px;margin:0 auto;padding:13px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px">
      <div style="background:#fff;border-radius:999px;padding:8px 15px;display:flex;align-items:center;box-shadow:0 2px 14px rgba(0,0,0,.4)">
        <img src="assets/innogyzer-logo-color.png" alt="Innogyzer" style="height:21px;display:block">
      </div>
      <div style="font-size:11px;font-weight:500;color:var(--fg-3);text-align:right;letter-spacing:.01em">The AI Sprint Innovation Agency</div>
    </div>
    <div style="max-width:800px;margin:0 auto;padding:0 22px 12px">
      <div style="display:flex;gap:6px">
        <sc-for list="{{ steps }}" as="step" hint-placeholder-count="6">
          <div style="flex:1;height:4px;border-radius:4px;background:{{ step.bg }};box-shadow:{{ step.glow }};transition:background .35s var(--ease,ease),box-shadow .35s ease"></div>
        </sc-for>
      </div>
    </div>
  </header>

  <div style="text-align:center;padding:54px 22px 40px;position:relative">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);color:var(--fg-2);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:6px 15px;border-radius:999px;margin-bottom:20px">⚡ BRIEF</div>
    <h1 style="font-family:'Inter',sans-serif;font-weight:900;font-size:clamp(30px,5.4vw,52px);line-height:1.06;letter-spacing:-.035em;margin:0 0 14px;background:linear-gradient(180deg,#fff 0%,#fff 42%,#8c8c95 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent">Dinos qué quieres lograr<br>con <em style="font-style:normal;-webkit-text-fill-color:#48B4D8;color:#48B4D8">IA</em> y lo construimos</h1>
    <p style="font-size:14.5px;color:var(--fg-3);max-width:540px;margin:0 auto;line-height:1.65">Leads · Automatización · Hiperpersonalización<br>Este formulario nos ayuda a entender tu situación y prepararte una propuesta a la medida.</p>
  </div>

  <main style="max-width:800px;margin:0 auto;padding:8px 22px 0">

    {{ alertEl }}

    <form id="dform" ref="{{ formRef }}" onChange="{{ onFormChange }}" onInput="{{ onFormChange }}" onSubmit="{{ onSubmit }}" novalidate="">

      <!-- 1. DATOS -->
      <div data-section="" style="--acc:#D8408A;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.04s">
        <div style="height:2px;background:var(--acc)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#0A0A0B;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">1</div>
          <div><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">Tus datos de contacto</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Nos ayuda a personalizar tu propuesta</div></div>
        </div>
        <div style="padding:22px">
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
            <div><label for="empresa" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Empresa *</label><input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" required="" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
            <div><label for="fecha" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Fecha</label><input type="text" id="fecha" name="fecha" readonly="" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-3);background:#0C0C0F;cursor:default;outline:none"></div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
            <div><label for="nombre" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Nombre y cargo *</label><input type="text" id="nombre" name="nombre" placeholder="Tu nombre — Director de Marketing" required="" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
            <div><label for="email" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Correo electrónico *</label><input type="email" id="email" name="email" placeholder="tu@empresa.com" required="" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div><label for="whatsapp" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">WhatsApp / Teléfono</label><input type="tel" id="whatsapp" name="whatsapp" placeholder="+52 55 0000 0000" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
            <div><label for="industria" style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Industria / Sector</label><select id="industria" name="industria" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"><option value="">Selecciona...</option><option>BPO / Contact Center</option><option>Banca y Finanzas</option><option>Seguros</option><option>Retail y E-commerce</option><option>Salud</option><option>Educación</option><option>Tecnología / SaaS</option><option>Manufactura</option><option>Agencia de marketing</option><option>Otro</option></select></div>
          </div>
        </div>
      </div>

      <!-- 2. SITUACION ACTUAL -->
      <div data-section="" style="--acc:#FCB454;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.08s">
        <div style="height:2px;background:var(--acc)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#0A0A0B;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">2</div>
          <div><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">Situación actual</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Cómo operan hoy en generación de leads y marketing</div></div>
        </div>
        <div style="padding:22px">
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Cómo generan leads hoy? (selecciona todos los que apliquen)</div>
              <sc-for list="{{ genLeads }}" as="item" hint-placeholder-count="6">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="gen_leads[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Qué tan automatizados están sus flujos de marketing y ventas?</div>
              <sc-for list="{{ nivelAuto }}" as="item" hint-placeholder-count="4">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="radio" name="nivel_automatizacion" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Cuántos leads generan al mes? (aprox.)</label><select name="vol_leads" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>Menos de 100</option><option>100 – 500</option><option>500 – 2,000</option><option>2,000 – 10,000</option><option>Más de 10,000</option></select></div>
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Tasa de conversión actual (aprox.)</label><select name="tasa_conversion" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>Menos del 1%</option><option>1% – 3%</option><option>3% – 7%</option><option>Más del 7%</option><option>No la medimos</option></select></div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Herramientas actuales (CRM, email, pauta...)</label><input type="text" name="herramientas_actuales" placeholder="HubSpot, Mailchimp, Meta Ads..." style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Inversión mensual en publicidad digital (aprox.)</label><select name="inversion_pauta" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>Menos de $10,000 MXN</option><option>$10,000 – $50,000 MXN</option><option>$50,000 – $200,000 MXN</option><option>Más de $200,000 MXN</option><option>No invertimos en pauta</option></select></div>
          </div>
        </div>
      </div>

      <!-- 3. RETOS Y OPORTUNIDADES -->
      <div data-section="" style="--acc:#A8CC18;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.12s">
        <div style="height:2px;background:var(--acc)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#0A0A0B;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">3</div>
          <div><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">Retos y oportunidades</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Tus principales retos y las oportunidades que ves</div></div>
        </div>
        <div style="padding:22px">
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Cuál es el mayor problema en tu proceso de leads hoy? (marca los 3 más importantes)</div>
              <sc-for list="{{ problemas }}" as="item" hint-placeholder-count="10">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="problemas[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Qué oportunidad ves con IA que hoy no estás aprovechando?</div>
              <sc-for list="{{ oportunidades }}" as="item" hint-placeholder-count="9">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="oportunidades[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Qué solución o resultado tienes en mente? Descríbelo con tus propias palabras.</label><textarea name="vision_propia" placeholder="Ej: Quiero que cuando alguien llene un formulario en mi web, un agente de IA le responda en menos de 1 minuto por WhatsApp y lo califique automáticamente antes de pasarlo al equipo de ventas..." style="width:100%;padding:12px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;min-height:96px;resize:vertical;line-height:1.55;transition:border-color .15s,box-shadow .15s"></textarea></div>
        </div>
      </div>

      <!-- 4. SOLUCION EN MENTE -->
      <div data-section="" style="--acc:#48B4D8;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.16s">
        <div style="height:2px;background:var(--acc)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#0A0A0B;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">4</div>
          <div><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">¿Qué solución tienes en mente?</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Tipo de implementación, integraciones y métricas de éxito</div></div>
        </div>
        <div style="padding:22px">
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Qué tipo de solución estás buscando?</div>
              <sc-for list="{{ tipoSolucion }}" as="item" hint-placeholder-count="9">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="tipo_solucion[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Con qué plataformas necesita integrarse la solución?</div>
              <sc-for list="{{ integraciones }}" as="item" hint-placeholder-count="8">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="integraciones[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Cómo medirán el éxito? (KPIs más importantes)</div>
              <sc-for list="{{ kpis }}" as="item" hint-placeholder-count="7">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="kpis[]" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">Rango de inversión estimado</label><select name="rango_inversion" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>Menos de $50,000 MXN</option><option>$50,000 – $150,000 MXN</option><option>$150,000 – $500,000 MXN</option><option>Más de $500,000 MXN</option><option>Por definir según propuesta</option></select></div>
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Cuándo quieren tenerla operando?</label><select name="horizonte" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>Este mes</option><option>En 1 a 3 meses</option><option>En 3 a 6 meses</option><option>Más de 6 meses</option><option>Depende de la propuesta</option></select></div>
          </div>
        </div>
      </div>

      <!-- 5. SIGUIENTES PASOS -->
      <div data-section="" style="--acc:#2490CC;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.2s">
        <div style="height:2px;background:var(--acc)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#fff;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">5</div>
          <div><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">Contexto y siguientes pasos</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Urgencia, decisor y cómo continuamos</div></div>
        </div>
        <div style="padding:22px">
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Qué tan urgente es para ustedes avanzar?</div>
              <sc-for list="{{ urgencia }}" as="item" hint-placeholder-count="3">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="radio" name="urgencia" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:18px">
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Quién toma la decisión final?</label><input type="text" name="decisor" placeholder="Ej: Director General, CMO..." style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;transition:border-color .15s,box-shadow .15s"></div>
            <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Evalúan otros proveedores?</label><select name="otros_proveedores" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>No, solo evaluamos a Innogyzer</option><option>Sí, 1 o 2 opciones más</option><option>Sí, 3 o más opciones</option><option>Todavía no hemos buscado otros</option></select></div>
          </div>
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Cuál sería el mejor siguiente paso?</div>
              <sc-for list="{{ sigPaso }}" as="item" hint-placeholder-count="4">
                <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:11px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="radio" name="siguiente_paso" value="{{ item.value }}" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.45;color:var(--fg-2)">{{ item.label }}</span></label>
              </sc-for>
            </div>
          </div>
          <div style="margin-bottom:18px"><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Algo más que quieras que sepamos antes de preparar tu propuesta?</label><textarea name="notas_adicionales" placeholder="Cualquier contexto adicional, condiciones especiales, restricciones..." style="width:100%;padding:12px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none;min-height:96px;resize:vertical;line-height:1.55;transition:border-color .15s,box-shadow .15s"></textarea></div>
          <div><label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:7px">¿Cómo llegaste a conocer a Innogyzer?</label><select name="fuente" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option>LinkedIn</option><option>Referido / recomendación</option><option>Google</option><option>Evento o conferencia</option><option>Ya los conocía</option><option>Otro</option></select></div>
        </div>
      </div>

      <!-- 6. PARTNER ANTHROPIC -->
      <div data-section="" style="--acc:#6CC09C;background:var(--card);border:1px solid var(--bd);border-radius:20px;overflow:hidden;margin-bottom:18px;box-shadow:0 0 0 1px rgba(108,192,156,.18),0 1px 2px rgba(0,0,0,.35);animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both;animation-delay:.24s">
        <div style="height:2px;background:linear-gradient(90deg,#48B4D8,#6CC09C,#A8CC18)"></div>
        <div style="display:flex;align-items:center;gap:14px;padding:17px 22px;border-bottom:1px solid var(--bd)">
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#0A0A0B;background:var(--acc);min-width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;flex-shrink:0">6</div>
          <div style="flex:1"><h2 style="font-size:17px;font-weight:700;letter-spacing:-.01em;color:var(--fg-1);margin:0">Tecnología que respalda tu solución</h2><div style="font-size:12.5px;color:var(--fg-3);margin-top:3px">Construimos con la mejor IA del mercado</div></div>
          <div style="display:flex;align-items:center;gap:6px;background:rgba(108,192,156,.12);border:1px solid rgba(108,192,156,.34);color:#cfeede;font-size:10px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;padding:6px 11px;border-radius:999px;white-space:nowrap;flex-shrink:0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="rgba(207,238,222,0.95)"></path></svg>
            Partner oficial de Anthropic
          </div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:12px;padding:16px 22px;background:rgba(108,192,156,.06);border-bottom:1px solid var(--bd);font-size:13px;line-height:1.6;color:var(--fg-2)">
          <div style="font-size:18px;color:#6CC09C;flex-shrink:0;line-height:1.2">✦</div>
          <div><strong style="color:var(--fg-1)">Somos Partner oficial de Anthropic.</strong> Implementamos tu solución sobre Claude, el modelo de IA líder en razonamiento, comprensión de lenguaje y manejo seguro de datos empresariales. Esto se traduce para ti en tres ventajas: nivel de seguridad empresarial (tu información nunca entrena modelos), acceso a licencias con condiciones preferentes, y soporte prioritario directo del fabricante. Tú nos dices qué quieres lograr; nosotros elegimos y configuramos la tecnología.</div>
        </div>
        <div style="padding:22px">
          <div style="margin-bottom:18px">
            <div style="border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:#0E0E12">
              <div style="padding:12px 16px;font-size:12.5px;font-weight:600;color:var(--fg-2);background:#121216">¿Qué tipo de apoyo buscas? (puedes marcar ambos)</div>
              <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:12px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="tipo_apoyo[]" value="licencias" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.5;color:var(--fg-2)"><strong style="color:var(--fg-1)">Licencias de IA para mi equipo</strong> — acceso a Claude (u otra herramienta) para que mi gente la use directamente en su día a día. Innogyzer gestiona las licencias, la activación y la capacitación.</span></label>
              <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:12px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="tipo_apoyo[]" value="solucion" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.5;color:var(--fg-2)"><strong style="color:var(--fg-1)">Una solución implementada y operando</strong> — que Innogyzer construya, integre y ponga a funcionar la solución (agente, flujo, automatización) en mis sistemas. Yo recibo el resultado funcionando.</span></label>
              <label data-opt="" style="display:flex;gap:11px;align-items:flex-start;padding:12px 16px;cursor:pointer;border-top:1px solid var(--bd);transition:background .14s" style-hover="background:#1E1E24"><input type="checkbox" name="tipo_apoyo[]" value="no_seguro" style="width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:var(--acc);cursor:pointer"><span style="font-size:13.5px;line-height:1.5;color:var(--fg-2)">No estoy seguro — quiero que me orienten sobre qué me conviene</span></label>
            </div>
          </div>
          <div style="margin-bottom:18px">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--fg-2);margin-bottom:5px">¿Ya usan o conocen alguna herramienta de IA en tu empresa? (opcional)</label>
            <div style="font-size:11.5px;color:var(--fg-4);margin-bottom:8px;font-style:italic">Solo para entender tu punto de partida — no necesitas conocer ninguna para trabajar con nosotros.</div>
            <select name="ia_experiencia_actual" style="width:100%;padding:11px 13px;border:1px solid var(--bd);border-radius:10px;font-family:inherit;font-size:13.5px;font-weight:500;color:var(--fg-1);background:#101013;outline:none"><option value="">Selecciona...</option><option value="ninguna">No usamos ninguna todavía — partimos de cero</option><option value="exploramos_chat">Hemos probado herramientas de chat (ChatGPT, Claude, Gemini)</option><option value="uso_informal">El equipo las usa de forma informal, sin proceso</option><option value="proyecto_activo">Ya tenemos algún proyecto o flujo con IA en marcha</option><option value="licencias_activas">Tenemos licencias empresariales activas de alguna IA</option></select>
          </div>
          <div style="display:flex;align-items:flex-start;gap:9px;background:rgba(72,180,216,.06);border:1px solid var(--bd);border-radius:12px;padding:12px 14px;font-size:11.5px;color:var(--fg-3);line-height:1.55">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;margin-top:1px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#48B4D8"></path></svg>
            Seguridad de nivel empresarial: tu información es confidencial y nunca se utiliza para entrenar modelos de IA. Cumplimos con los estándares de privacidad que tu empresa requiere.
          </div>
        </div>
      </div>

      <div style="text-align:center;padding:14px 0 8px">
        <button type="submit" disabled="{{ submitting }}" style="font-family:'Inter',sans-serif;font-size:15px;font-weight:600;color:#0A0A0B;background:linear-gradient(135deg,#A8CC18,#6CC09C);border:none;border-radius:999px;padding:15px 46px;cursor:pointer;box-shadow:0 0 42px rgba(168,204,24,.28);transition:transform .12s,box-shadow .2s,opacity .2s" style-hover="transform:translateY(-2px);box-shadow:0 0 60px rgba(168,204,24,.44)" style-active="transform:translateY(0)">{{ submitLabel }}</button>
        <div style="font-size:11.5px;color:var(--fg-3);margin-top:12px">Tu información es confidencial y nunca se comparte con terceros.</div>
      </div>

    </form>
  </main>

  <footer style="text-align:center;padding:30px 16px;font-size:11.5px;color:var(--fg-3);border-top:1px solid var(--bd);margin-top:24px">
    © 2025 <a href="https://innogyzer.com" style="color:#48B4D8;text-decoration:none">Innogyzer</a> — The AI Sprint Innovation Agency · <a href="mailto:ivan@innogyzer.com" style="color:#48B4D8;text-decoration:none">ivan@innogyzer.com</a>
  </footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  state = { filled: 0, alert: null, submitting: false, submitLabel: 'Enviar diagnóstico →' };

  fmtDate() {
    return new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  componentDidMount() {
    const f = this.formEl && this.formEl.querySelector('#fecha');
    if (f) f.value = this.fmtDate();
  }

  updateProgress() {
    if (!this.formEl) return;
    const sections = this.formEl.querySelectorAll('[data-section]');
    let filled = 0;
    sections.forEach(sec => {
      const inputs = sec.querySelectorAll('input:not([readonly]),select,textarea');
      const has = Array.from(inputs).some(i =>
        (i.type === 'checkbox' || i.type === 'radio') ? i.checked : i.value.trim() !== ''
      );
      if (has) filled++;
    });
    if (filled !== this.state.filled) this.setState({ filled });
  }

  onFormChange = (e) => {
    const t = e.target;
    if (t && t.name === 'problemas[]' && t.checked) {
      const checked = this.formEl.querySelectorAll('input[name="problemas[]"]:checked');
      if (checked.length > 3) { t.checked = false; }
    }
    this.updateProgress();
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const required = ['empresa', 'nombre', 'email'];
    let valid = true;
    required.forEach(id => {
      const el = this.formEl.querySelector('#' + id);
      if (!el.value.trim()) { el.style.borderColor = '#E5484D'; valid = false; }
      else { el.style.borderColor = ''; }
    });
    if (!valid) {
      this.setState({ alert: { type: 'error', html: '⚠️ Por favor completa los campos obligatorios: Empresa, Nombre y Correo.' } });
      return;
    }
    this.setState({ submitting: true, submitLabel: 'Enviando...' });
    try {
      const fd = new FormData(this.formEl);
      const res = await fetch('submit.php', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        this.setState({
          alert: { type: 'success', html: '✅ <strong>¡Gracias!</strong> Recibimos tu diagnóstico. Nos pondremos en contacto contigo en menos de 24 horas para agendar tu sesión.' },
          submitLabel: 'Enviado ✓'
        });
        this.formEl.reset();
        const f = this.formEl.querySelector('#fecha');
        if (f) f.value = this.fmtDate();
        this.updateProgress();
      } else {
        throw new Error(json.message || 'Error desconocido');
      }
    } catch (err) {
      this.setState({
        alert: { type: 'error', html: '❌ Hubo un problema al enviar. Por favor intenta de nuevo o escríbenos a <a href="mailto:ivan@innogyzer.com" style="color:#48B4D8">ivan@innogyzer.com</a>' },
        submitting: false,
        submitLabel: 'Enviar diagnóstico →'
      });
    }
  };

  renderVals() {
    const COLORS = ['#D8408A', '#FCB454', '#A8CC18', '#48B4D8', '#2490CC', '#6CC09C'];
    const filled = this.state.filled;
    const steps = COLORS.map((c, i) => ({
      bg: i < filled ? c : 'rgba(255,255,255,.10)',
      glow: i === filled - 1 ? '0 0 10px ' + c + '88' : 'none'
    }));

    const a = this.state.alert;
    let alertEl = null;
    if (a) {
      const ok = a.type === 'success';
      alertEl = React.createElement('div', {
        style: {
          borderRadius: '12px', padding: '14px 18px', fontSize: '13px', lineHeight: 1.55,
          marginBottom: '18px',
          background: ok ? 'rgba(91,192,122,.10)' : 'rgba(229,72,77,.10)',
          border: '1px solid ' + (ok ? 'rgba(91,192,122,.4)' : 'rgba(229,72,77,.4)'),
          color: ok ? '#9be3b0' : '#f0a6a4'
        },
        dangerouslySetInnerHTML: { __html: a.html }
      });
    }

    return {
      steps,
      alertEl,
      submitting: this.state.submitting,
      submitLabel: this.state.submitLabel,
      formRef: (el) => { this.formEl = el; },
      onFormChange: this.onFormChange,
      onSubmit: this.onSubmit,
      genLeads: [
        { value: 'pauta_digital', label: 'Pauta digital (Meta Ads, Google Ads, TikTok Ads)' },
        { value: 'equipo_comercial', label: 'Equipo comercial / prospección manual' },
        { value: 'inbound_organico', label: 'Inbound / contenido orgánico (SEO, redes sociales)' },
        { value: 'eventos_webinars', label: 'Eventos, webinars o alianzas' },
        { value: 'base_datos_propia', label: 'Base de datos propia (email, WhatsApp, CRM)' },
        { value: 'referidos', label: 'Referidos / boca en boca' }
      ],
      nivelAuto: [
        { value: 'nada', label: 'Nada — todo es manual' },
        { value: 'algo', label: 'Algo — tenemos algunos correos o secuencias básicas' },
        { value: 'moderado', label: 'Moderado — usamos CRM y flujos, pero no con IA' },
        { value: 'avanzado', label: 'Avanzado — ya automatizamos bastante, queremos el siguiente nivel' }
      ],
      problemas: [
        { value: 'poco_volumen', label: 'Generamos pocos leads — necesitamos más volumen' },
        { value: 'baja_calidad', label: 'Los leads que llegan no son de calidad o no califican' },
        { value: 'seguimiento_lento', label: 'El seguimiento es lento o inconsistente' },
        { value: 'baja_conversion', label: 'Tenemos leads pero no los convertimos bien' },
        { value: 'no_saber_creativos', label: 'No sabemos qué mensajes o creativos funcionan antes de invertir' },
        { value: 'sin_personalizacion', label: 'Cada lead recibe el mismo mensaje — sin personalización' },
        { value: 'sin_visibilidad', label: 'No tenemos visibilidad de qué canal genera los mejores resultados' },
        { value: 'mkt_ventas_desconectado', label: 'El proceso entre marketing y ventas está desconectado' },
        { value: 'respuesta_lenta', label: 'Perdemos leads por falta de respuesta rápida' },
        { value: 'base_no_aprovechada', label: 'No aprovechamos la base de datos que ya tenemos' }
      ],
      oportunidades: [
        { value: 'personalizacion_mensajes', label: 'Personalizar mensajes y creativos para cada segmento o cliente' },
        { value: 'lead_scoring', label: 'Calificar y priorizar leads automáticamente (lead scoring con IA)' },
        { value: 'agente_conversacional', label: 'Responder leads al instante con agentes conversacionales (chat / voz / WhatsApp)' },
        { value: 'nurturing_inteligente', label: 'Nutrir leads con secuencias automáticas según su comportamiento' },
        { value: 'validacion_creativos', label: 'Probar y validar mensajes o creativos antes de invertir en pauta' },
        { value: 'prediccion_cierre', label: 'Predecir qué leads tienen más probabilidad de cerrar' },
        { value: 'optimizacion_pauta', label: 'Optimizar el presupuesto de pauta en tiempo real con IA' },
        { value: 'reactivacion_base', label: 'Recuperar leads inactivos o bases de datos que ya no se trabajan' },
        { value: 'personalizacion_web', label: 'Personalizar la experiencia en web o landing pages según el perfil del visitante' }
      ],
      tipoSolucion: [
        { value: 'agente_leads', label: 'Un agente de IA que responda y califique leads automáticamente (chat, voz o WhatsApp)' },
        { value: 'nurturing_flujos', label: 'Flujos de nurturing inteligentes y personalizados por segmento o comportamiento' },
        { value: 'hiperpersonalizacion_pauta', label: 'Hiperpersonalización de campañas de pauta digital con IA' },
        { value: 'lead_scoring_crm', label: 'Lead scoring: que la IA me diga qué leads priorizar, integrado al CRM' },
        { value: 'dashboard_inteligencia', label: 'Dashboard de inteligencia de clientes y predicción de conversión' },
        { value: 'validacion_creativos', label: 'Validación de mensajes y creativos con IA antes de lanzar campañas' },
        { value: 'reactivacion_bd', label: 'Recuperación y reactivación de base de datos inactiva' },
        { value: 'integral', label: 'Una solución integral que conecte generación, calificación y cierre de leads' },
        { value: 'no_definido', label: 'Todavía no lo tengo claro — necesito orientación' }
      ],
      integraciones: [
        { value: 'crm', label: 'CRM propio / HubSpot / Salesforce' },
        { value: 'meta_google_ads', label: 'Meta Ads / Google Ads / TikTok Ads' },
        { value: 'whatsapp_api', label: 'WhatsApp Business API' },
        { value: 'email_marketing', label: 'Plataforma de email marketing (Mailchimp, ActiveCampaign, etc.)' },
        { value: 'contact_center', label: 'Plataforma de contact center (Genesys, Avaya, etc.)' },
        { value: 'workspace', label: 'Google Workspace / Microsoft 365' },
        { value: 'bd_propias', label: 'Bases de datos propias (SQL, BigQuery, etc.)' },
        { value: 'por_definir', label: 'No lo hemos definido todavía' }
      ],
      kpis: [
        { value: 'vol_leads_calificados', label: 'Incremento en volumen de leads calificados (MQL / SQL)' },
        { value: 'cpl_cpa', label: 'Reducción de costo por lead (CPL) o por adquisición (CPA)' },
        { value: 'tasa_conversion', label: 'Mejora en tasa de conversión de lead a cliente' },
        { value: 'tiempo_respuesta', label: 'Reducción en tiempo de respuesta y seguimiento' },
        { value: 'roas', label: 'Incremento en ROAS de campañas' },
        { value: 'nurturing_engagement', label: 'Tasa de apertura / respuesta en flujos de nurturing' },
        { value: 'reactivacion', label: 'Retención y reactivación de base de datos' }
      ],
      urgencia: [
        { value: 'alta', label: '🔴 Alta — queremos empezar este mes' },
        { value: 'media', label: '🟡 Media — próximo trimestre, en fase de evaluación' },
        { value: 'baja', label: '🟢 Explorando — todavía estamos definiendo qué queremos' }
      ],
      sigPaso: [
        { value: 'diagnostico', label: 'Sesión de diagnóstico gratuita (45 min) — exploramos opciones juntos' },
        { value: 'propuesta', label: 'Recibir una propuesta técnica y económica personalizada' },
        { value: 'demo', label: 'Ver una demo de cómo funcionaría la solución' },
        { value: 'directivos', label: 'Presentación para el equipo directivo' }
      ]
    };
  }
}
</script>
</body>
</html>
