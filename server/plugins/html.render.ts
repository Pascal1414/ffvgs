export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.body.push(
      `<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" netlify hidden>
        <input id="contact-email" name="email" type="email" />
        <textarea id="contact-message" name="message"></textarea>
    </form>

    <form name="join-association" method="POST" netlify-honeypot="bot-field" data-netlify="true" netlify hidden>
        <input type="radio" name="membership" />
        <input id="join-firstname" name="firstname" type="text" />
        <input id="join-lastname" name="lastname" type="text" />
        <input id="join-birthdate" name="birthdate" type="date" />
        <input id="join-street" name="street" type="text" />
        <input id="join-zip" type="text" name="zip" />
        <input id="join-place" name="place" type="text" />
        <input id="join-email" name="email" type="email" />
        <textarea id="join-message" name="message"></textarea>
    </form>`
    );
  });
});
