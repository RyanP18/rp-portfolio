// TODO replace urls with Ryan's
const urls = {
  GitHub: "https://github.com/RyanP18/",
  Twitter: "https://twitter.com/poppr23",
  Twitch: "https://www.twitch/home.tv/",
  Mail: "myemail@gmail.com",
  Instagram: "https://www.instagram.com/ryanpopp18/",
};

function goTo(url) {
  window.open(url, "_blank");
}

function goToGitHub() {
  goTo(urls.GitHub);
}

function goToTwitter() {
  goTo(urls.Twitter);
}

function goToTwitch() {
  goTo(urls.Twitch);
}

function goToInstagram() {
  goTo(urls.Instagram);
}

function mailTo() {
  goTo(`mailto:${urls.Mail}`);
}
