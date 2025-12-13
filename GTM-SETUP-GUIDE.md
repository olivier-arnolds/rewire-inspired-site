# Google Tag Manager Setup Guide
## Eclectik AI Transformation Website

Deze handleiding helpt je om de tracking volledig te configureren in Google Tag Manager.

---

## ✅ Wat is al geïnstalleerd

De volgende tracking codes zijn al toegevoegd aan je website:

1. **Google Tag Manager** (GTM-KZKSN8CT)
2. **Google Analytics 4** (G-HKXJDC9W9J)
3. **LinkedIn Insight Tag** (Partner ID: 9108033)
4. **Conversion Tracking Events** (via custom JavaScript)

---

## 📊 Tracking Events die automatisch worden verzonden

De website stuurt automatisch de volgende events naar GA4 en GTM:

### 1. CTA Clicks
- **Event naam**: `cta_click`
- **Wanneer**: Gebruiker klikt op "Explore Solutions" button
- **Parameters**:
  - `event_category`: engagement
  - `event_label`: Naam van de CTA
  - `cta_location`: Locatie op de pagina

### 2. Contact Form Submissions
- **Event naam**: `contact_form_submit`
- **Wanneer**: Gebruiker verstuurt contactformulier
- **Parameters**:
  - `event_category`: engagement
  - `event_label`: Contact Form
  - `name`, `email`, `company` (indien beschikbaar)

### 3. Case Study Views
- **Event naam**: `case_study_view`
- **Wanneer**: Gebruiker bekijkt een case study
- **Parameters**:
  - `event_category`: content
  - `event_label`: Naam van de case study

### 4. Resource Downloads
- **Event naam**: `resource_download`
- **Wanneer**: Gebruiker download een resource
- **Parameters**:
  - `event_category`: conversion
  - `event_label`: Naam van de resource
  - `resource_type`: Type resource

### 5. Newsletter Signups
- **Event naam**: `newsletter_signup`
- **Wanneer**: Gebruiker schrijft zich in voor nieuwsbrief
- **Parameters**:
  - `event_category`: engagement
  - `event_label`: Newsletter Subscription

### 6. Consultation Requests
- **Event naam**: `consultation_request`
- **Wanneer**: Gebruiker vraagt consultatie aan
- **Parameters**:
  - `event_category`: conversion
  - `event_label`: Consultation Request
  - `value`: 1

---

## 🔧 Google Tag Manager Configuratie

### Stap 1: Verifieer GTM Installatie

1. Ga naar [tagmanager.google.com](https://tagmanager.google.com)
2. Selecteer container **GTM-KZKSN8CT**
3. Klik op "Preview" rechtsboven
4. Voer je website URL in: `https://www.eclectik-insights.co`
5. Controleer of GTM correct laadt

### Stap 2: Configureer Triggers

Maak de volgende triggers aan in GTM:

#### Trigger 1: Contact Form Submit
- **Type**: Custom Event
- **Event name**: `contact_form_submit`
- **This trigger fires on**: All Custom Events

#### Trigger 2: CTA Click
- **Type**: Custom Event
- **Event name**: `cta_click`
- **This trigger fires on**: All Custom Events

#### Trigger 3: Consultation Request
- **Type**: Custom Event
- **Event name**: `consultation_request`
- **This trigger fires on**: All Custom Events

### Stap 3: Configureer Tags (optioneel)

Als je extra tracking wilt toevoegen via GTM (naast de directe GA4 en LinkedIn tracking):

#### Tag 1: GA4 Event - Contact Form
- **Tag Type**: Google Analytics: GA4 Event
- **Measurement ID**: G-HKXJDC9W9J
- **Event Name**: contact_form_submit
- **Trigger**: Contact Form Submit

#### Tag 2: LinkedIn Conversion
- **Tag Type**: Custom HTML
- **HTML**:
```html
<script>
  window.lintrk('track', { conversion_id: YOUR_CONVERSION_ID });
</script>
```
- **Trigger**: Consultation Request

---

## 📈 Google Analytics 4 Configuratie

### Stap 1: Verifieer GA4 Tracking

1. Ga naar [analytics.google.com](https://analytics.google.com)
2. Selecteer je property (G-HKXJDC9W9J)
3. Ga naar **Reports** → **Realtime**
4. Open je website in een nieuw tabblad
5. Controleer of je real-time bezoek ziet

### Stap 2: Configureer Conversies

1. Ga naar **Configure** → **Events**
2. Markeer de volgende events als conversies:
   - `contact_form_submit`
   - `consultation_request`
   - `resource_download`
   - `newsletter_signup`

### Stap 3: Maak Custom Reports

1. Ga naar **Explore** → **Blank**
2. Maak rapporten voor:
   - CTA Click Performance
   - Contact Form Conversion Rate
   - Case Study Engagement
   - Resource Download Tracking

---

## 🔗 LinkedIn Campaign Manager Configuratie

### Stap 1: Verifieer Insight Tag

1. Ga naar [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager)
2. Klik op **Account Assets** → **Insight Tag**
3. Controleer of Partner ID **9108033** actief is
4. Gebruik de Tag Helper Chrome extensie om te verifiëren

### Stap 2: Maak Conversion Tracking

1. Ga naar **Account Assets** → **Conversions**
2. Maak nieuwe conversies aan:
   - **Contact Form Submission** (Auto-conversion via Insight Tag)
   - **Consultation Request** (Auto-conversion via Insight Tag)
   - **Resource Download** (Auto-conversion via Insight Tag)

### Stap 3: Koppel aan Campagnes

1. Ga naar je LinkedIn Ads campagnes
2. Selecteer de conversies die je wilt tracken
3. Stel conversion attribution window in (bijv. 30 dagen)

---

## 🧪 Testing Checklist

Voordat je live gaat, test de volgende scenario's:

- [ ] **Page View Tracking**: Open homepage en controleer in GA4 Realtime
- [ ] **CTA Click**: Klik op "Explore Solutions" en controleer event in GA4
- [ ] **Contact Form**: Vul formulier in en controleer conversion
- [ ] **Case Study View**: Open case study en controleer event
- [ ] **LinkedIn Tag**: Gebruik LinkedIn Tag Helper om te verifiëren
- [ ] **GTM Preview**: Test alle triggers in GTM Preview mode

---

## 📞 Troubleshooting

### GA4 Events verschijnen niet
- Controleer of GA4 Measurement ID correct is (G-HKXJDC9W9J)
- Check browser console voor JavaScript errors
- Verifieer dat ad-blockers zijn uitgeschakeld tijdens testen

### LinkedIn Tag werkt niet
- Controleer of Partner ID correct is (9108033)
- Gebruik LinkedIn Insight Tag Helper Chrome extensie
- Verifieer dat third-party cookies zijn ingeschakeld

### GTM laadt niet
- Controleer of GTM container ID correct is (GTM-KZKSN8CT)
- Verifieer dat GTM script in `<head>` staat
- Check of noscript in `<body>` staat

---

## 🎯 Aanbevolen Dashboards

### GA4 Dashboard
- **Traffic Sources**: Waar komen bezoekers vandaan?
- **User Engagement**: Welke pagina's presteren het best?
- **Conversions**: Hoeveel contact form submissions?
- **Event Tracking**: Welke CTA's worden het meest geklikt?

### LinkedIn Campaign Manager
- **Conversion Tracking**: Hoeveel leads via LinkedIn?
- **Website Demographics**: Wie bezoekt je website?
- **Retargeting Audiences**: Bouw audiences voor retargeting

---

## 📚 Nuttige Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [LinkedIn Insight Tag Guide](https://business.linkedin.com/marketing-solutions/insight-tag)
- [GTM Preview Mode](https://support.google.com/tagmanager/answer/6107056)

---

**Vragen?** Neem contact op met je marketing team of web developer voor verdere ondersteuning.
