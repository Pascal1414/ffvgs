<template>
    <form>
        <h2>Anmeldung Jungfischerkurs</h2>
        <p>Wir Freuen uns über deine Anmeldung! Beachte jedoch dass die Teilnehmeranzahl limitiert ist. </p>
        <div class="split">
            <div class="child">
                <h3>Jugendliche oder Jugendlicher:</h3>
                <div>
                    <label for="firstname">Vorname*</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Vorname" required>
                </div>
                <div>
                    <label for="lastname">Nachname*</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Nachname" required>
                </div>
                <div>
                    <label for="address">Adresse*</label>
                    <input type="text" id="address" name="address" placeholder="Adresse" required>
                </div>
                <div>
                    <label for="birthday">Geburtsdatum*</label>
                    <input type="date" id="birthday" name="birthday" required>
                </div>
            </div>
            <div class="parent">
                <h3>Erziehungsberechtigte Person:</h3>
                <div>
                    <label for="firstname-parent">Vorname*</label>
                    <input type="text" id="firstname-parent" name="firstname-parent" placeholder="Vorname" required>
                </div>
                <div>
                    <label for="lastname-parent">Nachname*</label>
                    <input type="text" id="lastname-parent" name="lastname-parent" placeholder="Nachname" required>
                </div>
                <div>
                    <label for="email-parent">E-Mail*</label>
                    <input type="email" id="email-parent" name="email-parent" placeholder="E-Mail" required>
                </div>
                <div>
                    <label for="phone-parent">Erreichbar wärend des Anlasses (Tel.)*</label>
                    <input type="tel" id="phone-parent" name="phone-parent" placeholder="Telefon" required>
                </div>
            </div>
        </div>
        <div>
            <label for="alreadyfished">Ich habe schon mal gefischt*</label>
            <select name="alreadyfished" id="alreadyfished" required>
                <option value="">Bitte auswählen</option>
                <option value="yes">Ja</option>
                <option value="no">Nein</option>
            </select>
        </div>
        <button type="submit">Absenden</button>
    </form>
</template>
<script lang="ts">
export default {
    name: 'RegistrationJungfischerkursForm'
};
</script>
<style lang="css">
form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.child,
.parent {
    margin-bottom: 0;
}

h3 {
    margin-bottom: 7px;
}

.split {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
}

.split div {
    width: 48%;
}


.split div div {
    width: 100%;
}
</style>