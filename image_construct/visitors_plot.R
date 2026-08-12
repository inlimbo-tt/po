# -----------------------------------------------------------------------
# Park Ouest — Gemiddeld aantal dagelijkse bezoekers
# Editorial / Economist-inspired version
# -----------------------------------------------------------------------

library(ggplot2)
library(dplyr)
library(tidyr)

# ---- 1. Data --------------------------------------------------------------

maanden <- c(
  "Jan", "Feb", "Maart", "Apr", "Mei", "Juni",
  "Juli", "Aug", "Sept", "Okt", "Nov", "Dec"
)

df <- tribble(
  ~maand, ~`2023`, ~`2024`, ~`2025`, ~`2026`,
  "Jan",     NA,      30,     100,     200,
  "Feb",     NA,      30,     150,     200,
  "Maart",   NA,      60,     250,     250,
  "Apr",     NA,     100,     350,     300,
  "Mei",     50,     100,     450,     400,
  "Juni",    50,     200,     400,     300,
  "Juli",    50,     300,     350,     150,
  "Aug",     50,     300,     350,      NA,
  "Sept",    80,     300,     400,      NA,
  "Okt",     50,     150,     250,      NA,
  "Nov",     30,     120,     250,      NA,
  "Dec",     30,      80,     250,      NA
) %>%
  mutate(
    maand = factor(maand, levels = maanden)
  ) %>%
  pivot_longer(
    cols = -maand,
    names_to = "jaar",
    values_to = "bezoekers"
  ) %>%
  filter(!is.na(bezoekers)) %>%
  mutate(
    jaar = factor(
      jaar,
      levels = c("2023", "2024", "2025", "2026")
    )
  )

# ---- 2. Visual hierarchy --------------------------------------------------
#
# 2025 is the main story.
# Earlier years are contextual.
# 2026 stays visible because it is the current year,
# but is clearly marked as incomplete.

kleuren <- c(
  "2023" = "#B8B8B8",
  "2024" = "#8C8C8C",
  "2025" = "#E64B26",
  "2026" = "#5A315F"
)

lijnbreedte <- c(
  "2023" = 0.9,
  "2024" = 0.9,
  "2025" = 1.5,
  "2026" = 1.2
)

puntgrootte <- c(
  "2023" = 1.8,
  "2024" = 1.8,
  "2025" = 2.7,
  "2026" = 2.3
)

# ---- 3. End labels --------------------------------------------------------

eindpunten <- df %>%
  mutate(
    maand_num = as.numeric(maand)
  ) %>%
  group_by(jaar) %>%
  slice_max(maand_num, n = 1, with_ties = FALSE) %>%
  ungroup() %>%
  mutate(
    label = case_when(
      jaar == "2026" ~ "2026 · t/m juli",
      TRUE ~ as.character(jaar)
    ),
    
    # Small vertical tweaks so labels do not collide
    label_y = case_when(
      jaar == "2023" ~ bezoekers - 4,
      jaar == "2024" ~ bezoekers,
      jaar == "2025" ~ bezoekers + 5,
      jaar == "2026" ~ bezoekers,
      TRUE ~ bezoekers
    )
  )

# ---- 4. Plot --------------------------------------------------------------

p <- ggplot(
  df,
  aes(
    x = maand,
    y = bezoekers,
    colour = jaar,
    group = jaar
  )
) +
  
  # Lines with different visual weight
  geom_line(
    aes(linewidth = jaar),
    lineend = "round"
  ) +
  
  # Observed monthly values
  geom_point(
    aes(size = jaar)
  ) +
  
  # Direct labels instead of legend
  geom_text(
    data = eindpunten,
    aes(
      x = maand,
      y = label_y,
      label = label,
      colour = jaar
    ),
    inherit.aes = FALSE,
    hjust = -0.15,
    fontface = "bold",
    size = 4.2
  ) +
  
  # ---- Scales ------------------------------------------------------------

scale_colour_manual(
  values = kleuren
) +
  
  scale_linewidth_manual(
    values = lijnbreedte
  ) +
  
  scale_size_manual(
    values = puntgrootte
  ) +
  
  scale_y_continuous(
    limits = c(0, 500),
    breaks = seq(0, 500, 100),
    
    # Keep bottom exactly at zero
    expand = expansion(
      mult = c(0, 0.02)
    )
  ) +
  
  # More room at right for direct labels
  scale_x_discrete(
    expand = expansion(
      add = c(0.35, 1.25)
    )
  ) +
  
  # ---- Text --------------------------------------------------------------

labs(
  title = "Park Ouest groeide snel — met sterke seizoenspieken",
  
  subtitle = paste0(
    "Het bezoek nam sterk toe tussen 2023 en 2025.\n",
    "De voorlopige cijfers voor 2026 tonen een lagere opkomst in de zomermaanden, ",
    "\n o.a. omdat veel families voor het eerst weer op vakantie kunnen."
  ),
  
  x = NULL,
  y = "Gemiddeld aantal bezoekers per dag",
  
  caption = "Bron: tellingen Park Ouest / Toestand"
) +
  
  # Allow labels to extend beyond plot panel
  coord_cartesian(
    clip = "off"
  ) +
  
  # ---- Theme -------------------------------------------------------------

theme_minimal(
  base_size = 14
) +
  
  theme(
    
    # Title
    plot.title = element_text(
      face = "bold",
      size = 22,
      lineheight = 1.05,
      colour = "#111111",
      margin = margin(b = 8)
    ),
    
    # Subtitle
    plot.subtitle = element_text(
      size = 12.5,
      lineheight = 1.3,
      colour = "#444444",
      margin = margin(b = 22)
    ),
    
    # Source
    plot.caption = element_text(
      size = 9.5,
      colour = "#777777",
      hjust = 0,
      margin = margin(t = 14)
    ),
    
    # Remove vertical grid
    panel.grid.major.x = element_blank(),
    
    # No minor grid
    panel.grid.minor = element_blank(),
    
    # Sparse horizontal grid
    panel.grid.major.y = element_line(
      colour = "#D7D7D7",
      linewidth = 0.45
    ),
    
    # Strong baseline
    axis.line.x = element_line(
      colour = "#222222",
      linewidth = 0.65
    ),
    
    axis.ticks = element_blank(),
    
    # Month labels
    axis.text.x = element_text(
      colour = "#222222",
      size = 11.5,
      margin = margin(t = 8)
    ),
    
    # Y values
    axis.text.y = element_text(
      colour = "#555555",
      size = 10.5,
      margin = margin(r = 8)
    ),
    
    # Direct labels replace legend
    legend.position = "none",
    
    # Space for end labels
    plot.margin = margin(
      t = 24,
      r = 95,
      b = 22,
      l = 22
    )
  )

print(p)

# ---- 5. Save --------------------------------------------------------------

ggsave(
  filename = "/Users/mamsir/Documents/tt/webs/po/public/images/infographics/visitors_NL.jpg",
  plot = p,
  width = 12,
  height = 7,
  dpi = 300,
  bg = "white"
)