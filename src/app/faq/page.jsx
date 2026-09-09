"use client";
import { PromoSection } from "@/components";
import React, { useEffect, useState } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import Head from "next/head";

// ==================== FAQ Data ====================
const faqData = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is CropGen?",
        answer:
          "CropGen is an AI-powered crop monitoring and LLM-based advisory platform. It combines 12+ satellite vegetation indices, farm data, and advanced AI models to provide farmers with real-time crop insights and personalized, region-specific advisory.",
      },
      {
        question: "Who can use CropGen?",
        answer:
          "Farmers, FPOs, agribusinesses, agri-input companies, exporters, cooperatives, and consultants who want smart farming, cost savings, and higher yields can benefit from CropGen.",
      },
    ],
  },
  {
    category: "About CropGen",
    items: [
      {
        question: "What is CropGen, in one sentence?",
        answer:
          "A satellite and AI platform that monitors farm fields and turns what it sees into specific instructions — when to irrigate, what to apply, where the crop is under stress and what to do about it.",
      },
      {
        question: "Who is it built for?",
        answer:
          "Individual farmers and farm managers, FPOs and cooperatives, agri-businesses and agri-input companies, exporters and processors who need traceability, and institutions running agricultural programmes at scale. The same platform serves all of them — what changes is how many fields sit under one account.",
      },
      {
        question: "Do I need to install sensors, drones or any hardware on my farm?",
        answer:
          "No. CropGen works entirely from satellite observation and the details you enter about the field. There is nothing to buy, install or maintain on the ground. The only thing the platform needs from you is an accurate field boundary and correct crop details.",
      },
      {
        question: "How is this different from just looking at my field?",
        answer:
          "Three things you cannot do by walking. Satellite indices detect stress before it is visible to the eye. The map shows variation across a field, so you can see that one corner is weaker than the rest rather than forming a general impression. And every reading is dated and stored, so a season becomes a record you can compare against rather than a memory.",
      },
      {
        question: "Is CropGen a replacement for an agronomist?",
        answer:
          "No, and it is not designed to be. It is a monitoring and decision-support layer. It tells you where to look and what the data suggests; an agronomist brings judgement about your specific crop, soil and market. The platform makes an agronomist more efficient — they walk to the right part of the right field instead of surveying everything.",
      },
      {
        question: "What languages does it work in?",
        answer:
          "The platform supports multiple Indian and international languages, selected during sign-up and changeable later from Settings. Advisories and farm communications are delivered in the language on your profile, not just the interface labels.",
      },
      {
        question: "Does it work outside India?",
        answer:
          "Yes. Country selection at sign-up sets the regional models applied to your fields, and CropGen has active deployments across multiple countries. Satellite coverage is global.",
      },
    ],
  },
  {
    category: "How CropGen Works",
    items: [
      {
        question: "How does CropGen monitor crops?",
        answer:
          "CropGen analyzes satellite imagery and 12+ vegetation indices (NDVI, EVI, SAVI, NDWI, Chlorophyll Index, etc.) to detect crop health, stress, water status, and growth stage.",
      },
      {
        question: "How does CropGen provide advisory?",
        answer:
          "CropGen uses LLM (Large Language Models) combined with AI/ML agronomy systems. It converts raw satellite + farm data into easy-to-understand, crop- and region-wise advisory for farmers.",
      },
      {
        question: "Do I need sensors to use CropGen?",
        answer:
          "No sensors are required. CropGen primarily uses satellite + AI. But if you already use sensors (soil moisture, weather), CropGen can integrate them for higher precision.",
      },
    ],
  },
  {
    category: "Account, login and access",
    items: [
      {
        question: "Should I sign up with my phone number or with Google?",
        answer:
          "Either works and both reach the same platform. Phone sign-in sends an OTP over WhatsApp; Google sign-in skips the OTP. Choose whichever credential you will reliably have access to, and then use the same one every time.",
      },
      {
        question: "I signed up with my phone, then logged in with Google, and my fields are gone. Why?",
        answer:
          "They are not gone — you are in a different account. A phone-number account and a Google account are two separate workspaces even if they belong to the same person. Log back in with the original method and your fields will be there.",
      },
      {
        question: "What is the organisation code, and do I need one?",
        answer:
          "It is optional, and most users leave it blank.",
      },
      {
        question: "What if I am part of an organisation collaborating with CropGen?",
        answer:
          "Enter the code CropGen issued to your organisation. Your account is then linked to that organisation's workspace, so fields and reporting sit under the organisation.",
      },
      {
        question: "What if I forgot to enter my organisation code at sign-up?",
        answer:
          "Contact your organisation's CropGen point of contact or the LeanCrop team. The account was created as a standalone workspace, so it needs to be linked on the back end rather than fixed from the app.",
      },
      {
        question: "Can I change my language after signing up?",
        answer:
          "Yes — go to Settings > Personal Info > Preferred Language. It applies to advisories and farm communications, not only to on-screen labels.",
      },
      {
        question: "Why does CropGen ask for my country?",
        answer:
          "Country selection sets the regional models used on your fields — soil behaviour, seasonal patterns and local climate baselines. Choose the country where the land is, not where you happen to be sitting when you register.",
      },
      {
        question: "Can more than one person use the same account?",
        answer:
          "An individual account is intended for one user. Multi-user access, with team members under a single organisation, is part of the enterprise and custom-pricing arrangement.",
      },
      {
        question: "Who can see my field data?",
        answer:
          "Your fields sit in your own workspace. If you registered with an organisation code, they sit within that organisation's workspace and are visible to it. For specific data-handling, retention or contractual terms, check the LeanCrop terms agreed during registration.",
      },
    ],
  },
  {
    category: "Subscription and billing",
    items: [
      {
        question: "Is the subscription per account or per field?",
        answer:
          "Per field. Each field you add is subscribed individually, which means you can run analytics on the fields that matter this season and leave the others unsubscribed. Settings > Farm Settings shows the state of every field, and can be filtered to just subscribed or just unsubscribed.",
      },
      {
        question: "Am I charged the full amount as soon as I subscribe?",
        answer:
          "No. Checkout saves your payment method, and recurring billing starts when the trial ends. The full subscription amount is not taken upfront.",
      },
      {
        question: "Monthly or yearly — what is the difference?",
        answer:
          "Only the billing cycle and price. Yearly carries a discount. The selection applies immediately at checkout, and the platform features are identical either way.",
      },
      {
        question: "The price shows in USD. Will I be charged in dollars?",
        answer:
          "No. The USD / INR toggle changes the display only. Payment is always processed in INR through Razorpay.",
      },
      {
        question: "Why does the price change when I draw a bigger field?",
        answer:
          "Pricing is area-based — the plan rate is applied per acre across the field you have drawn. A larger boundary means a larger monitored area and therefore a higher amount.",
      },
      {
        question: "Can I unsubscribe one field without touching the others?",
        answer:
          "Yes. Subscriptions are managed per field from Settings > Farm Settings. An unsubscribed field stays in your account with its history intact; it simply stops receiving fresh analytics.",
      },
      {
        question: "What happens to my data if I let a field lapse?",
        answer:
          "The field and its recorded history remain in your account. Re-subscribing resumes monitoring. This is why we recommend marking a finished crop as harvested rather than deleting the field.",
      },
      {
        question: "When should I be talking to sales instead of subscribing online?",
        answer:
          "When you are onboarding many fields at once, need multiple team members on one workspace, want a dedicated account manager, or are looking at API access or a white-labelled deployment. Contact Sales on the plan screen. See Section 15.",
      },
    ],
  },
  {
    category: "Payment & Copyright",
    items: [
      {
        question: "What subscription options are available?",
        answer:
          "CropGen offers a free trial, then monthly or annual subscription plans, based on acreage and services (monitoring, advisory, yield prediction, sustainability).",
      },
      {
        question: "What is the refund policy?",
        answer:
          "If you are charged extra, activate by mistake, or cancel within 30 days, you get a full refund.",
      },
      {
        question: "Who owns the farm data?",
        answer:
          "Farmers and agribusinesses own their data. CropGen only analyzes it securely and does not sell it.",
      },
    ],
  },
  {
    category: "Fields and boundaries",
    items: [
      {
        question: "How do I add a field?",
        answer:
          "Add Field in the left menu, choose the land status, find the location on the map, and tap each corner of the plot to close a boundary. Then fill in the crop details and save. The full walkthrough is in Section A.3 of the User Guide.",
      },
      {
        question: "I already have my boundaries as a file. Do I have to draw them again?",
        answer:
          "No. Use Add Fields on the map to import GeoJSON, KML or Shapefile directly. The boundary is drawn for you. For anyone onboarding more than a handful of fields, this is faster and more accurate than marking corners by hand.",
      },
      {
        question: "How accurate does the boundary need to be?",
        answer:
          "Accurate enough to exclude everything that is not crop. This is the single biggest driver of data quality on the platform. If the boundary includes a road, a bund, a farm structure or part of a neighbour's plot, those pixels are analysed as though they were your crop. The health score drops, the area is overstated, and the nutrient recommendation is calculated for land you are not farming.",
      },
      {
        question: "\"Crop in field\" or \"Barren land\" — which do I choose?",
        answer:
          "Choose Crop in field when a crop is already sown and standing. The actual sowing date — today or earlier — is required. Choose Barren land when nothing is standing; fallow or under preparation. The crop you plan to sow and the expected sowing date are then required.",
      },
      {
        question: "I entered the wrong sowing date. Does it matter?",
        answer:
          "Yes, more than most people expect. Sowing date is the anchor for crop age, BBCH growth staging and accumulated heat units — which in turn drive the nutrient targets and every stage-specific recommendation. Correct it as soon as you notice, from Settings > Farm Settings.",
      },
      {
        question: "I am intercropping. Can CropGen handle that?",
        answer:
          "Yes. Use Add another crop on the same boundary. Both crops are tracked, one marked as the main crop and the other as the intercrop, and the analytics view lets you switch between them.",
      },
      {
        question: "My crop is harvested. Should I delete the field?",
        answer:
          "No — use Mark harvested on the crop instead. Deleting removes the season's history along with the field, and that history is what the next season's yield baseline and field comparisons are built from.",
      },
      {
        question: "How many fields can I add?",
        answer:
          "There is no practical limit on an ordinary account — each field carries its own subscription. Accounts running large portfolios are usually better served by the enterprise option and enterprise arrangement, which adds team access and a dedicated manager.",
      },
      {
        question: "Can I edit a boundary after saving it?",
        answer:
          "Yes. Go to Settings > Farm Settings, select the farm card, and the boundary opens alongside the crop details for editing. Fixing a boundary is always worth doing — every subsequent reading improves.",
      },
    ],
  },
  {
    category: "Satellite data and imagery",
    items: [
      {
        question: "How often is my field updated?",
        answer:
          "Whenever a satellite passes over it. The scene timeline under the map lists every available pass with its date and cloud percentage, so you can see exactly what is available for your field rather than assuming a fixed schedule.",
      },
      {
        question: "There is no recent image for my field. What happened?",
        answer:
          "Almost always cloud. Optical satellites cannot see through it, so a heavily clouded pass produces an unusable scene. Check the cloud percentage on the timeline, then switch to Satellite 1, which is radar-based and unaffected by cloud.",
      },
      {
        question: "Satellite 1 or Satellite 2 — which should I use?",
        answer:
          "Use Satellite 2 normally because it provides higher visual detail and the full vegetation, water and nutrient index set on clear-sky days. Switch to Satellite 1 during monsoon and overcast periods, or whenever the optical scenes show high cloud, because it is radar-based and can see through cloud.",
      },
      {
        question: "What cloud percentage is still usable?",
        answer:
          "Treat low single-digit cloud as clean and anything above roughly a third as suspect — the reading may be describing cloud rather than crop. At 90%+ it is certainly cloud. When in doubt, step back to the nearest clear scene on the timeline, or move to Satellite 1.",
      },
      {
        question: "Can I look at how my field looked earlier in the season?",
        answer:
          "Yes. Pick any past date on the scene timeline, or set a custom start and end date to compare a period. The time-series charts under the map show the same information as a trend rather than a single day.",
      },
      {
        question: "Why does my field look different from my neighbour's on the same day?",
        answer:
          "Because it is different — different crop, stage, irrigation, soil and management. That is the point of field-level monitoring. What matters is the trend within your own boundary over time, and the variation between zones inside it, rather than a comparison against the plot next door.",
      },
      {
        question: "How detailed is the imagery?",
        answer:
          "Fine enough to resolve variation within a normal field — the zoning analysis, for example, works on a 10-metre grid. It is not fine enough to identify individual plants; for that, photograph the plant and use Disease Detection.",
      },
    ],
  },
  {
    category: "Indices — which one, when",
    items: [
      {
        question: "There are more than twenty indices. Which one do I actually use?",
        answer:
          "Start from the decision you are about to make, not from the index name. Use Crop Health for the overall view, Crop Health (dense) for a denser crop, Crop Health (simple) for a quick look, Early Stage Health for recently sown crops, Dry Land Health for dry and sparse fields, Water in Leaves for irrigation checks, Plant Water Level for plant water status, Nitrogen Level for fertilization decisions, Waterlogging Risk after rain, any Satellite 1 index when it is cloudy, and Field View when you just want the plain picture.",
      },
      {
        question: "What is NDVI, in plain terms?",
        answer:
          "A measure of how much healthy, living vegetation is in each pixel. Higher means denser and more vigorous. It is the most widely used vegetation index in agriculture and the one most of the crop health views are built on.",
      },
      {
        question: "Why are there three different Crop Health indices?",
        answer:
          "Because one formula does not work equally well across all conditions. The standard index saturates on a very dense canopy, which is where the Dense Version corrects for. The Simpler version is a faster, coarser read. Early Stage and Dry Land versions are correct for exposed soil, which otherwise drags the reading down on a young or sparse crop.",
      },
      {
        question: "My health score dropped suddenly. Should I panic?",
        answer:
          "Check three things before you act: cloud on that scene, recent harvest or cutting, and whether an event on that date — such as heavy rain, heavy rain or a heat spell — coincides with the drop. If none of these explain it, open the index map, find which part of the field the drop is coming from, and walk to that patch.",
      },
      {
        question: "What does the legend on the map actually tell me?",
        answer:
          "The class breaks for the selected index show how much of your field falls into each class — in hectares and as a percentage. It turns a colour picture into a number you can act on: for example, part of the field is weak, or a certain percentage falls in the lowest class.",
      },
      {
        question: "Can I see the numbers instead of just colours?",
        answer:
          "Yes. Hover anywhere on the boundary for a patch-level insight with the area, class and recommendation. Below the map, the vegetation and water index charts give minimum, mean and maximum values plotted across the season.",
      },
    ],
  },
  {
    category: "Crop Monitoring",
    items: [
      {
        question: "What crop indices does CropGen provide?",
        answer:
          "CropGen provides 12+ vegetation indices, including: NDVI, EVI, SAVI, MSAVI, NDWI, OSAVI, GNDVI, ARVI, VARI, Chlorophyll Index, DVI, SIPI.",
      },
      {
        question: "Can CropGen detect crop stress, pests, and diseases?",
        answer:
          "Yes. CropGen identifies stress zones early and provides preventive and curative LLM-based advisory for pest, disease, and nutrient management.",
      },
      {
        question: "Does CropGen support fertilizer and irrigation advisory?",
        answer:
          "Yes. CropGen analyzes soil and crop status to recommend NPK requirements, irrigation schedules, and water stress alerts.",
      },
    ],
  },
  {
    category: "Crop health and growth stages",
    items: [
      {
        question: "What does the crop health percentage mean?",
        answer:
          "It is a vegetation-based score for the whole field, banded into a plain label such as Moderate or Good. Read it as a summary, not a diagnosis — the map underneath tells you whether a score is an evenly average field or a strong field with one bad corner. Those need different responses.",
      },
      {
        question: "What is BBCH, and why does the platform keep mentioning it?",
        answer:
          "An international scale for describing what stage a crop is at, from germination to maturity. CropGen uses BBCH so advice is matched to the stage the crop is actually in rather than being generic — for instance, the nutrient targets in Advanced Soil Analytics change with the BBCH stage.",
      },
      {
        question: "What are growing degree days, and why not just count days since sowing?",
        answer:
          "Because crops develop on accumulated heat, not on the calendar. Two fields sown in the same week can be at genuinely different stages if one had a warmer month. GDD tracks the heat the crop has actually received, which is why the growth stage in CropGen can differ from a fixed crop-duration table.",
      },
      {
        question: "The growth stage looks wrong for my crop.",
        answer:
          "Check the sowing date on the field first — that is the anchor for the whole calculation, and a wrong date shifts every stage. Correct it in Settings > Farm Settings.",
      },
      {
        question: "How reliable is the expected yield figure?",
        answer:
          "Treat it as a planning baseline for the crop, variety and area you entered, adjusted by what the satellite is seeing — not as a guarantee. It is most useful as a comparison: how this season is tracking against the standard, and whether a management change moves the number.",
      },
    ],
  },
  {
    category: "Soil, nutrition and NPK",
    items: [
      {
        question: "Can I use the CropGen soil report instead of a lab test?",
        answer:
          "No. The soil report is generated from satellite data and the historical performance of the field. It is intended for analysis and interpretation — understanding relative soil condition, comparing fields, and spotting where attention is needed. It is not a substitute for a laboratory soil test and must not be used on its own to fix application rates. Before deciding what to apply and how much, carry out a physical soil test and use the CropGen values as supporting context.",
      },
      {
        question: "Then what is the soil report actually good for?",
        answer:
          "Three things a lab test cannot do cheaply. It covers the whole field rather than the few points you sampled. It is available immediately, with no sampling round. And it can be regenerated over time, so you can watch a parameter move across seasons. Use it to decide where and whether to sample, then let the lab decide the dose.",
      },
      {
        question: "The CropGen NPK numbers do not match my lab report. Which is right?",
        answer:
          "The lab, for absolute values — it measured your actual soil. CropGen is inferring from satellite observation across the whole field, and it is calibrated to show pattern reliably rather than laboratory-exact figures. Use the lab for the number and CropGen for the distribution: which part of the field is short, and by how much relative to the rest.",
      },
      {
        question: "How does CropGen decide the fertiliser dose it recommends?",
        answer:
          "It compares current uptake against the target required at the crop's current BBCH stage, states the deficit for nitrogen, phosphorus and potassium, and converts that deficit into a quantity for your area. Because the target moves with the growth stage, the same field gets different advice at different points in the season.",
      },
      {
        question: "Should I apply exactly what it recommends?",
        answer:
          "Use it as a starting point, cross-checked against a physical soil test and your agronomist's view of the crop. The recommendation is a well-reasoned estimate from satellite data — good enough to plan around, not something to commit a season's input budget to without confirmation.",
      },
      {
        question: "What is soil organic carbon, and why does CropGen report it?",
        answer:
          "It is the organic matter fraction of the soil, and the best single indicator of long-term soil health — it drives water retention, structure and nutrient availability. Unlike NPK, it moves slowly, which makes it a useful measure of whether your practices are improving the land over years rather than weeks.",
      },
      {
        question: "Why does the platform show soil moisture at two depths?",
        answer:
          "Because the surface can dry out while the root zone is still fine, and vice versa. Reading the subsoil and the deeper layer together — alongside soil temperature and the rain forecast — is what separates a real irrigation need from a dry-looking surface.",
      },
    ],
  },
  {
    category: "Weather",
    items: [
      {
        question: "How far ahead does the forecast go?",
        answer:
          "A rolling 16-day outlook, with daily temperature, conditions and rainfall. As with any forecast, the first few days are the most reliable and the far end is directional.",
      },
      {
        question: "Why does CropGen's weather differ from my phone's weather app?",
        answer:
          "Your phone usually reports the nearest city or district station. CropGen resolves to the coordinates of the boundary you drew. Rainfall in particular varies sharply over short distances, so a district forecast can report rain that never reached your plot.",
      },
      {
        question: "Can I see what the weather actually was, not just the forecast?",
        answer:
          "Yes — that is the Weather History lookup. Set a start and end date and pull the record for that field. This is what to use when you are explaining a yield gap, a disease outbreak or a stress event after the fact rather than planning for one.",
      },
      {
        question: "I want to spray this week. What should I look at?",
        answer:
          "Rain chances and wind on the forecast, and the insight list — CropGen issues an explicit \"no spray needed\" or \"skip spray today\" advisory when wind is high or rain is expected. Spraying ahead of rain wastes the input and the labour.",
      },
      {
        question: "What is evapotranspiration and do I need to care?",
        answer:
          "It is how much water your field is losing per day through soil evaporation and plant transpiration, in millimetres. It matters because it is the demand side of the irrigation equation — read it with soil moisture (supply) and the rain forecast (incoming) and the schedule works itself out.",
      },
    ],
  },
  {
    category: "Operations",
    items: [
      {
        question: "Why should I bother logging operations?",
        answer:
          "Because at the end of the season you will want to know what was actually done, when, by whom and at what cost — and memory is not good enough. The calendar also holds the advisories CropGen issued on the same dates, so you can see what was recommended against what was done.",
      },
      {
          question: "What can I schedule?",
        answer:
          "Cultivator, spray, irrigation, fertigation, field monitoring, carbon tracking and other operation types. The form adapts to the type you pick, and captures supervisor, male and female labour counts, estimated cost and free-text comments.",
      },
      {
        question: "Do I have to fill in every field on the form?",
        answer:
          "Only the operation type and the progress status are required. Everything else is optional — but the optional fields are exactly what makes the record useful six months later, so fill in what you can.",
      },
      {
        question: "Does this help with certification or buyer audits?",
        answer:
          "That is much of its value. For FPOs, exporters and certification bodies the Operations log is an audit trail: what was applied, when, by whom, at what cost, and what the platform advised at the time. It is what turns satellite monitoring into documented practice.",
      },
    ],
  },
  {
    category: "Sustainability",
    items: [
      {
        question: "How does CropGen support sustainability?",
        answer:
          "CropGen helps reduce fertilizer, pesticide, and water usage while improving yields. It also measures CO₂ emission reduction and water savings, useful for sustainability and carbon credit projects.",
      },
    ],
  },
  {
    category: "Disease Detection",
    items: [
      {
        question: "How does it work?",
        answer:
          "Upload a clear photograph of an affected leaf. The platform classifies the crop, detects the disease and returns suggested control measures.",
      },
      {
        question: "What makes a good photograph?",
        answer:
          "Fill the frame with the leaf so the symptom is the subject, not a detail in a wide shot. Shoot in daylight, out of glare, because harsh shadows and blown highlights can hide the discolouration the model reads. Photograph early symptoms because a fully collapsed leaf can look the same for many causes, while early lesions are distinguishable. Take several samples because one leaf can mislead, but a consistent pattern across the patch will not.",
      },
      {
        question: "Should I leave it on auto-detect or pick the crop myself?",
        answer:
          "Pick the crop when you know it — narrowing the model to one crop generally gives a tighter result. Leave it on auto-detect when the sample came from a mixed or intercropped field, or when you are not certain what you are looking at.",
      },
      {
        question: "How does this fit with the satellite view?",
        answer:
          "They answer different halves of the same question. Analytics shows where in the field the problem is and how much area it covers; Disease Detection identifies what it is. Use the index map to find the weak patch, walk to it, and photograph a leaf from there.",
      },
      {
        question: "Can I act on the result straight away?",
        answer:
          "Photograph-based identification is a first read. For an unfamiliar or fast-spreading symptom, confirm with an agronomist before committing to a chemical response across the whole field. Then log whatever you apply in Operations.",
      },
    ],
  },
  {
    category: "Zoning, SOC and VRA",
    items: [
      {
        question: "What is variable rate application, and why would I want it?",
        answer:
          "A field is not uniform. Applying one rate everywhere over-feeds the strong parts and starves the weak ones. VRA means varying the rate by zone — which saves input on the good ground and puts it where it will actually produce a response.",
      },
      {
        question: "Do I need special machinery to use zoning?",
        answer:
          "Rate-controlled equipment lets you apply the maps directly, but the zoning output is useful without it. Even with a conventional spreader, knowing that one third of the field is consistently weak changes how you allocate input and where you sample.",
      },
      {
        question: "How accurate are the zone values?",
        answer:
          "Zoning is built on a published proxy relationship and every map carries its own retrieval confidence indicator. The zone pattern — which part of the field is strong and which is weak — is the reliable output and is what should drive variable rate application. For absolute values, calibrate against samples taken at the suggested sampling points marked on the map.",
      },
      {
        question: "How often should I regenerate zones?",
        answer:
          "Not often. Soil carbon and texture change slowly, so once a season — or before a major input decision — is usually enough. The analysis runs on a stack of historical scenes up to the end date you set, so a longer history generally gives a more stable result.",
      },
      {
        question: "Can I adjust the zones myself?",
        answer:
          "Yes — Create / Edit Zones. You can adjust them because you know things about the field the satellite does not: an old boundary, a buried structure, or the corner that always floods.",
      },
      {
        question: "What is the difference between the Zoning maps and the Soil Report?",
        answer:
          "The Soil Report gives one set of values for the field as a shareable PDF. Zoning gives values mapped across the field, resolved into management zones. Use the Soil Report for understanding overall soil condition and sharing with an agronomist or buyer; use Zoning for deciding where to vary input and where to take samples.",
      },
    ],
  },
  {
    category: "Reports and CropGen AI",
    items: [
      {
        question: "What is the Farm Report?",
        answer:
          "Everything CropGen holds on one field, compiled into a single downloadable PDF — crop health and crop details, weekly crop advisory, soil analytics and the analytics data. It is the artefact that leaves the platform, for a landowner, a lender, a buyer or a certification body.",
      },
      {
        question: "When should I export one?",
        answer:
          "At the same point in each cycle — monthly, or at each major growth stage. A sequence of dated reports is far more persuasive to a third party than a single snapshot, because it shows management over time rather than at a moment.",
      },
      {
        question: "What can I ask CropGen AI?",
        answer:
          "Anything about your farm — what to check this week, how crop health is doing, when to irrigate given recent weather, how to read the vegetation indices — and general agricultural questions beyond your own data. Suggested prompts cover the common cases.",
      },
      {
        question: "Does it actually know about my fields?",
        answer:
          "Yes, within the focus you set. Choose All farms or a single field before asking — the answer is scoped to whatever is selected, so select the field first if the question is field-specific.",
      },
      {
        question: "Can CropGen AI be wrong?",
        answer:
          "Yes. Double-check important farm decisions with your agronomist before committing input, labour or cost to them. Use the assistant to understand and explore, not as the final authority on a spend.",
      },
    ],
  },
  {
    category: "For FPOs, agri-businesses and partners",
    items: [
      {
        question: "We have hundreds of fields to onboard. What is the fastest route?",
        answer:
          "Boundary files. If the fields exist as GeoJSON, KML or Shapefile, they import directly rather than being marked by hand — dramatically faster and more accurate at scale. Talk to the LeanCrop team about bulk onboarding and an organisation workspace before you start.",
      },
      {
        question: "What does an organisation account give us that individual accounts do not?",
        answer:
          "Fields and reporting sit under one organisation workspace rather than as scattered personal accounts, and the custom arrangement adds admin team members, a dedicated account manager and priority support. Members join by entering the organisation code at sign-up.",
      },
      {
        question: "Can we get CropGen under our own brand?",
        answer:
          "Yes — white-labelled deployments on CropGen infrastructure are an established arrangement, and several partners already run their own branded platforms this way. Contact the LeanCrop team for scope and commercials.",
      },
      {
        question: "Can we pull CropGen data into our own systems?",
        answer:
          "API access is available as a commercial arrangement for partners who want the analytics inside their own application or dashboard rather than through the CropGen interface. Contact sales.",
      },
      {
        question: "Does it support sustainability and carbon reporting?",
        answer:
          "Carbon emissions, capture and net balance are tracked per field as a standing activity, with practice guidance aimed at improving capture. For clients with sustainability reporting obligations, that is the figure that feeds it, and Operations provides the practice record behind it.",
      },
      {
        question: "Who do we talk to?",
        answer:
          "Contact Sales on the plan screen, or the LeanCrop Agritech team directly. Enterprise and institutional clients already on custom plans should reach their dedicated account manager.",
      },
    ],
  },
  {
    category: "Agri-Business",
    items: [
      {
        question: "Can FPOs and cooperatives use CropGen?",
        answer:
          "Yes. CropGen provides field-level + aggregated insights so FPOs can manage thousands of acres at once.",
      },
      {
        question: "Can agri-input companies benefit from CropGen?",
        answer:
          "Yes. Input companies use CropGen to give precision advisory, validate product performance, and engage with farmers more effectively.",
      },
      {
        question: "Can exporters and processors use CropGen?",
        answer:
          "Yes. CropGen helps exporters track crop quality, traceability, and yield forecasts across large areas.",
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        question: "Does CropGen provide AI yield prediction?",
        answer:
          "Yes. CropGen predicts yields using AI and satellite data, supporting procurement, insurance, and trade planning.",
      },
      {
        question: "Can CropGen integrate with other platforms?",
        answer:
          "Yes. CropGen supports API integration with agri-business or government platforms (e.g., CROPIC).",
      },
      {
        question: "Does CropGen provide daily advisory to farmers?",
        answer:
          "Yes. CropGen delivers daily LLM-powered advisory for fertilizer, irrigation, and pest/disease management, customized by crop and growth stage.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        question: "Quick fixes for the most common problems",
        answer:
          "My fields have disappeared: You are probably in the other account. Log out and sign back in with your original method — phone or Google, whichever you used first.\n\nNo imagery for recent dates: Check the cloud percentage on the scene timeline, then switch to Satellite 1, which is unaffected by cloud.\n\nHealth score looks too low: Check the boundary does not include roads, bunds, structures or a neighbouring plot. Correct it in Settings › Farm Settings.\n\nGrowth stage looks wrong: Verify the sowing date. Staging is calculated from it, so an incorrect date shifts every stage-based recommendation.\n\nA field shows no analytics: Confirm the field is subscribed. Subscription state is shown on each card in Settings › Farm Settings.\n\nAdvisories in the wrong language: Update Preferred Language in Settings › Personal Info.\n\nNot receiving WhatsApp messages: Check the number on your profile is the WhatsApp number, the field is subscribed, and CropGen is not blocked.\n\nNutrient advice looks off: Check the crop, variety and sowing date on the field are correct — the targets are crop- and stage-specific.\n\nArea shown is larger than my plot: The boundary is over-drawn. Edit it in Settings › Farm Settings; this also affects the subscription amount, which is area-based.",
      },
      {
        question: "None of that fixed it. Who do I contact?",
        answer:
          "The CropGen team at LeanCrop Agritech Pvt. Ltd. Include your registered phone or email, the field name, and the date you saw the problem — that is enough to reproduce almost anything. Enterprise clients should contact their dedicated account manager.",
      },
    ],
  },
];

// ==================== FAQ Accordion Item ====================

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`border-b border-[#DDEBE4] transition-all duration-300 ${
        isOpen ? "bg-[#F2FAF6]" : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 px-5 md:px-7 py-5 md:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[16px] md:text-[18px] font-semibold leading-relaxed transition-colors ${
            isOpen
              ? "text-[#1B9B61]"
              : "text-[#17352C] group-hover:text-[#1B9B61]"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#2AB673] text-white rotate-180"
              : "bg-[#EAF7F0] text-[#265A48] group-hover:bg-[#D8F0E4]"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-7 pb-6">
            <div className="h-px bg-[#DDEBE4] mb-5" />

            <p className="text-[15px] md:text-[16px] leading-7 text-[#5B6B64] whitespace-pre-line">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// ==================== FAQ Page ====================

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    additionalInfo: "",
    acceptedPrivacyPolicy: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ---------------------------------------------------------
  // SEARCH
  // ---------------------------------------------------------

  const filteredFaqData = faqData
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.question
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  const totalResults = filteredFaqData.reduce(
    (total, section) => total + section.items.length,
    0
  );

  // ---------------------------------------------------------
  // POPULAR QUESTIONS
  // ---------------------------------------------------------

  const popularQuestions = [
    "What is CropGen?",
    "How does CropGen monitor crops?",
    "How reliable is the expected yield figure?",
    "Can I use the CropGen soil report instead of a lab test?",
  ];

  // ---------------------------------------------------------
  // CATEGORY ICONS
  // ---------------------------------------------------------

  const categoryIcons = {
    "General Questions": "01",
    "About CropGen": "02",
    "How CropGen Works": "03",
    "Account, login and access": "04",
    "Subscription and billing": "05",
    "Payment & Copyright": "06",
    "Fields and boundaries": "07",
    "Satellite data and imagery": "08",
    "Indices — which one, when": "09",
    "Crop Monitoring": "10",
    "Crop health and growth stages": "11",
    "Soil, nutrition and NPK": "12",
    Weather: "13",
    Operations: "14",
    Sustainability: "15",
    "Disease Detection": "16",
    "Zoning, SOC and VRA": "17",
    "Reports and CropGen AI": "18",
    "For FPOs, agri-businesses and partners": "19",
    "Agri-Business": "20",
    "Additional Services": "21",
    Troubleshooting: "22",
  };

  // ---------------------------------------------------------
  // SLUG
  // ---------------------------------------------------------

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // ---------------------------------------------------------
  // SCROLL TO CATEGORY
  // ---------------------------------------------------------

  const scrollToCategory = (category) => {
    const element = document.getElementById(`faq-${slugify(category)}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ---------------------------------------------------------
  // OPEN POPULAR QUESTION
  // ---------------------------------------------------------

  const openPopularQuestion = (question) => {
    setSearchTerm("");

    setTimeout(() => {
      const element = document.getElementById(
        `question-${slugify(question)}`
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setOpenIndex(question);
      }
    }, 100);
  };

  // ---------------------------------------------------------
  // FORM
  // ---------------------------------------------------------

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitMsg(null);

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA failed");
      }

      const token = await window.grecaptcha.execute(
        "6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10",
        {
          action: "contact_form",
        }
      );

      const nameParts = formData.name.trim().split(" ");

      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const payload = {
        firstName,
        lastName,
        email: formData.email,
        additionalInfo: formData.additionalInfo,
        acceptedPrivacyPolicy: true,
        token,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMsg({
          type: "success",
          text: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          additionalInfo: "",
          acceptedPrivacyPolicy: true,
        });
      } else {
        setSubmitMsg({
          type: "error",
          text: data.error || "Failed to send!",
        });
      }
    } catch (err) {
      setSubmitMsg({
        type: "error",
        text: "Something went wrong! Try again.",
      });
    }

    setLoading(false);
  };

  // ---------------------------------------------------------
  // BREADCRUMB SCHEMA
  // ---------------------------------------------------------

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cropgenapp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://cropgenapp.com/faq",
      },
    ],
  };

  // ---------------------------------------------------------
  // RECAPTCHA
  // ---------------------------------------------------------

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------

  return (
    <div className="bg-white text-[#17352C]">
      {/* =====================================================
          SEO
      ===================================================== */}

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden min-h-[520px] md:min-h-[580px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/image/faq/faq2.png')",
          }}
        />

        {/* Green / dark overlay */}
        <div className="absolute inset-0 bg-[#102E24]/65" />

        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3025]/85 via-[#174D3A]/55 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 py-24">
          <div className="max-w-4xl">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#2AB673]" />

              <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#DDF8E9]">
                CropGen Help Center
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold leading-[0.95] text-white faq-font">
              How can we
              <br />
              help you?
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base md:text-xl leading-relaxed text-white/90">
              Find answers about CropGen, crop monitoring, soil
              health, disease detection and precision farming.
            </p>

            {/* Search */}
            <div className="mt-9 max-w-2xl">
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
                <Search
                  size={22}
                  className="ml-4 text-[#6B7C74] flex-shrink-0"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setOpenIndex(null);
                  }}
                  placeholder="Search your question..."
                  className="flex-1 px-4 py-4 bg-transparent text-[#17352C] outline-none text-base md:text-lg"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setOpenIndex(null);
                    }}
                    className="mr-2 px-4 py-2 text-sm font-medium text-[#265A48] hover:text-[#2AB673]"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  className="hidden sm:flex items-center justify-center bg-[#2AB673] hover:bg-[#209C62] text-white rounded-xl px-5 py-4 transition-colors"
                >
                  <Search size={21} />
                </button>
              </div>

              {/* Popular search terms */}
              {!searchTerm && (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-white/70">
                    Popular:
                  </span>

                  {["Soil", "Crop Health", "Disease", "Irrigation"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSearchTerm(item)}
                        className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white hover:bg-white/25 transition"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH RESULTS
      ===================================================== */}

      {searchTerm ? (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2AB673] mb-2">
                Search results
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#17352C]">
                Results for "{searchTerm}"
              </h2>
            </div>

            <p className="text-[#6B7C74]">
              {totalResults}{" "}
              {totalResults === 1 ? "question" : "questions"} found
            </p>
          </div>

          {filteredFaqData.length > 0 ? (
            <div className="max-w-4xl">
              {filteredFaqData.map((section, sectionIndex) => (
                <div
                  key={section.category}
                  className="mb-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#EAF7F0] flex items-center justify-center text-xs font-bold text-[#265A48]">
                      {categoryIcons[section.category] || "•"}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-[#265A48]">
                      {section.category}
                    </h3>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-[#DDEBE4] shadow-sm">
                    {section.items.map((item) => {
                      const key = item.question;

                      return (
                        <div
                          key={key}
                          id={`question-${slugify(item.question)}`}
                        >
                          <AccordionItem
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === key}
                            onClick={() =>
                              setOpenIndex(
                                openIndex === key ? null : key
                              )
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl py-16 text-center border border-[#DDEBE4] rounded-3xl bg-[#F7FCF9]">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF7F0] flex items-center justify-center mb-5">
                <Search className="text-[#2AB673]" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#17352C]">
                No results found
              </h3>

              <p className="mt-3 text-[#6B7C74] max-w-md mx-auto">
                We couldn't find an answer matching your
                search. Try a different keyword or contact our
                team.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="mt-7 px-6 py-3 rounded-xl bg-[#2AB673] text-white font-semibold hover:bg-[#209C62] transition"
              >
                Browse all questions
              </button>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* =================================================
              POPULAR QUESTIONS
          ================================================= */}

          <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2AB673] mb-2">
                  Quick answers
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-[#17352C]">
                  Popular Questions
                </h2>
              </div>

              <p className="text-[#6B7C74] max-w-md">
                Start with some of the questions our users ask
                most often.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => openPopularQuestion(question)}
                  className="group text-left flex items-center justify-between gap-5 p-5 md:p-6 rounded-2xl border border-[#DDEBE4] bg-white hover:bg-[#F2FAF6] hover:border-[#A9DCC2] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <span className="font-semibold text-[#17352C] group-hover:text-[#1B9B61] transition-colors">
                    {question}
                  </span>

                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EAF7F0] text-[#265A48] flex items-center justify-center group-hover:bg-[#2AB673] group-hover:text-white transition">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* =================================================
              CATEGORY NAVIGATION
          ================================================= */}

          <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2AB673] mb-3">
                Browse the Help Center
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#17352C]">
                Explore by topic
              </h2>

              <p className="mt-4 text-[#6B7C74] text-base md:text-lg">
                Choose a topic to quickly find the information
                you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {faqData.map((section) => (
                <button
                  key={section.category}
                  type="button"
                  onClick={() => scrollToCategory(section.category)}
                  className="group text-left p-6 rounded-2xl bg-white border border-[#DDEBE4] hover:border-[#9ED5B9] hover:bg-[#F5FCF8] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF7F0] flex items-center justify-center text-sm font-bold text-[#265A48] group-hover:bg-[#2AB673] group-hover:text-white transition-colors">
                      {categoryIcons[section.category] || "•"}
                    </div>

                    <span className="text-xl text-[#7B8B84] group-hover:text-[#2AB673] transition">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#17352C] group-hover:text-[#1B9B61] transition-colors">
                    {section.category}
                  </h3>

                  <p className="mt-2 text-sm text-[#78877F]">
                    {section.items.length}{" "}
                    {section.items.length === 1
                      ? "question"
                      : "questions"}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* =================================================
              FAQ CONTENT
          ================================================= */}

          <section className="bg-[#F5FAF7] border-y border-[#E1EEE7]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
              <div className="max-w-3xl mb-14">
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2AB673] mb-3">
                  Frequently asked questions
                </p>

                <h2 className="text-3xl md:text-5xl font-bold text-[#17352C]">
                  Everything you need to know
                </h2>

                <p className="mt-4 text-[#6B7C74] text-base md:text-lg leading-relaxed">
                  Explore CropGen's features, crop monitoring
                  tools, soil insights, disease detection,
                  subscriptions and more.
                </p>
              </div>

              <div className="max-w-5xl space-y-14">
                {faqData.map((section) => (
                  <div
                    key={section.category}
                    id={`faq-${slugify(section.category)}`}
                    className="scroll-mt-28"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#DFF4E8] flex items-center justify-center text-sm font-bold text-[#265A48]">
                        {categoryIcons[section.category] || "•"}
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#265A48]">
                          {section.category}
                        </h3>

                        <p className="text-sm text-[#789087] mt-1">
                          {section.items.length}{" "}
                          {section.items.length === 1
                            ? "question"
                            : "questions"}
                        </p>
                      </div>
                    </div>

                    {/* Accordion */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#DDEBE4] shadow-sm">
                      {section.items.map((item) => {
                        const key = item.question;

                        return (
                          <div
                            key={key}
                            id={`question-${slugify(
                              item.question
                            )}`}
                            className="scroll-mt-28"
                          >
                            <AccordionItem
                              question={item.question}
                              answer={item.answer}
                              isOpen={openIndex === key}
                              onClick={() =>
                                setOpenIndex(
                                  openIndex === key ? null : key
                                )
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF7F0] text-[#1B9B61] text-sm font-semibold mb-6">
              Need more help?
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#17352C] leading-tight">
              Can't find your
              <br />
              answer?
            </h2>

            <p className="mt-6 text-[#6B7C74] text-lg leading-relaxed max-w-xl">
              Our team is happy to help. Send us your question
              and we'll get back to you with the information you
              need.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#F1F8F4] text-[#265A48] text-sm">
                Crop Monitoring
              </span>

              <span className="px-4 py-2 rounded-full bg-[#F1F8F4] text-[#265A48] text-sm">
                Soil & NPK
              </span>

              <span className="px-4 py-2 rounded-full bg-[#F1F8F4] text-[#265A48] text-sm">
                Disease Detection
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#EFFAF4] rounded-3xl p-6 md:p-8 lg:p-10 border border-[#D9EEE2] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#17352C]">
              Contact CropGen
            </h3>

            <p className="mt-2 text-[#718078]">
              Tell us what you're looking for.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="faq-name"
                  className="block text-sm font-semibold text-[#265A48] mb-2"
                >
                  Name
                </label>

                <input
                  id="faq-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-white border border-[#D5E6DC] rounded-xl px-4 py-3.5 text-[#17352C] outline-none transition focus:border-[#2AB673] focus:ring-2 focus:ring-[#2AB673]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="faq-email"
                  className="block text-sm font-semibold text-[#265A48] mb-2"
                >
                  Email Address
                </label>

                <input
                  id="faq-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white border border-[#D5E6DC] rounded-xl px-4 py-3.5 text-[#17352C] outline-none transition focus:border-[#2AB673] focus:ring-2 focus:ring-[#2AB673]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="faq-message"
                  className="block text-sm font-semibold text-[#265A48] mb-2"
                >
                  Your Question
                </label>

                <textarea
                  id="faq-message"
                  rows="5"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you'd like to know..."
                  className="w-full bg-white border border-[#D5E6DC] rounded-xl px-4 py-3.5 text-[#17352C] outline-none resize-none transition focus:border-[#2AB673] focus:ring-2 focus:ring-[#2AB673]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#2AB673] hover:bg-[#209C62] disabled:opacity-60 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
              >
                {loading ? "Submitting..." : "Send Message"}

                {!loading && <span>→</span>}
              </button>

              {/* Message */}
              {submitMsg && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${
                    submitMsg.type === "success"
                      ? "bg-[#E5F7EC] text-[#16804D]"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {submitMsg.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-[#18553F] px-7 md:px-14 py-12 md:py-16">
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#2AB673]/20" />

          <div className="absolute -right-10 -bottom-32 w-72 h-72 rounded-full bg-[#2AB673]/10" />

          <div className="relative z-10 max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#8DE0B4]">
              Grow smarter with CropGen
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to monitor your farm smarter?
            </h2>

            <p className="mt-4 text-white/75 text-base md:text-lg max-w-2xl">
              Turn satellite data and AI-powered insights into
              better farming decisions.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/start-demo"
                className="inline-flex items-center gap-2 bg-white text-[#18553F] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#F0FFF6] transition"
              >
                Start Demo
                <span>→</span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXISTING PROMO SECTION
      ===================================================== */}

      <PromoSection />
    </div>
  );
}
