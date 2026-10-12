// Language-independent profile data. Translated text (role, bio,
// experiences) lives in messages/en.json and messages/pt.json.
export const profile = {
  name: "Antonio Nascimento Jr.",
  // Your photo in public/. If the file is missing, initials are shown instead.
  image: "/profile.webp",
  // Zoom into the photo: 1 = no zoom. Focus is the point to center on,
  // as percentages of the image width/height (your face).
  imageZoom: 2,
  imageFocus: { x: 44, y: 54 },
  // CV in public/, linked from the "Download CV" button.
  resume: "/antonio-nascimento.pdf",
  email: "antonio.flavio.job@gmail.com",
  links: [{ label: "antonio.eu.com", href: "https://antonio.eu.com" }],
};
