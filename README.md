# Data-storytelling
Colorism in High Fashion - We looked at 19 years of covers to find how Vogue represents women of all shades

This folder contains all of the data used in The Pudding essay Colorism in High Fashion published in April 2019.

## face.csv
**Source & methodology**
Every cover of Vogue (USA) that was published between 2000 and 2018 (inclusive) was downloaded from the Vogue archive. The faces of the female cover models were identified using facial recognition (via openCV) and cropped to size. Within these cropped photos, the pixels that were skin were identified using a k-means model (via scikitlearn). For a single face, the median r, g, and b values for the skin-pixels was calculated and stored.

**Variables**

| Header | Description | Data Type |
|:-:|:-:|:-:|
| *date* | The date that the cover was published | date (m/d/yyyy) |
| *model* | The name of the model | text |
| *tone* | Median r, g, and b values of the skin-pixels of the model's face, in hex format | text |
| *l* | Lightness value when the tone is converted to hsl format | float |


## models.csv

**Variables**

| Header | Description | Data Type |
|:-:|:-:|:-:|
| *model* | The name of the model | text |
| *tone* | Median r, g, and b values of the skin-pixels of the model's face, in hex format | text |
| *l* | Lightness value when the tone is converted to hsl format | float |
| *n_covers* | Number of Vogue covers between 2000 and 2019 with this woman's face | int |


