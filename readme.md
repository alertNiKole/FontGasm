# Font Gasm | Requirements Documentation

## Description: 

Font Pairing utility for Developers
This app will take fonts from Google Fonts and pair them based on user selection and display them in the appropriate box and alter the appropriate text on screen.

The Dev will then also be able to grab the font pairings code for use in their project.

This will couple well with Google Fonts in that it allows them to use the fonts by choice instead of only being able to see the recommended fonts on the site. You can choose up to 3 font pairings and place them into various element blocks. 

## Tools:

Mongo or JSON
Express
Grid
Node

### Fonts

- Exo for headings
- Questrial - display
- Encode Sans - small text

### Colors:

- #CC5C2D (burnt orange)
- #997B6E (light brown)
- #FF5252   (coral)
- #92FF92 (light green)
- #65CC2D (dark green)

## Source Data

Pull from Google Font API
    
### [Google Font Developer API]("https://developers.google.com/fonts/docs/developer_api")

## Source Control
GitHub will be used for source control.
### [Repo Link]("https://github.com/alertNiKole/FontGasm.git")


## Long Description
This is a font pairing tool that allows you to pull from Google Fonts and put your choice of fonts onscreen for use in your app.  It is directed towards web and ui developers. 

### Process Outline

#### Phase 1 
- Select Google Font & Size -> page load initiates API call, backend prepopulates using Google Font API, stored in local if needed Mongo

#### Phase 2 
- Display Onscreen --> Once selected (size) then Main display updates with the selected size, font-family. and lorem wording. [user previews]

#### Phase 3 
- Asyncronously the data also populates with the correct code to port to the users website in 2 parts:
    style link 
    font families 

#### Phase 4 
- Reset - resetting the page will create a reset to all set values replacing the lorem inserts with a new dataset.

This means that all data on the main component will have 3 states-
    -   1. Starting/initial hidden
    -   2. Preview (showing the font)
    -   3. Reset (user already been active, knows how to use)

#### CRUD
C - reate  call
R - ead post/return -->select
U - pdate -- no changes will happen in other words, update could be changing the requested font but not actually changing the font in the API (because you can't and that would be silly)
D - delete -- nothing will be allowed to be deleted only reset

#### Optional: Font Selector displays the actual font of the font being displayed in the selector box...makes sense, read it slow.