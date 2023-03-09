<template>
    <h1>Beitrittserklärung</h1>
    <p>Sehr gerne möchten wir Sie in unseren Verein aufnehmen. </p>
    <form>
        <p>Ich wünsche eine Aufnahme als:</p>
        <ul>
            <li>
                <input type="radio" id="young-fisher" name="membership" value="Jungfischer" required />
                <label for="young-fisher">Jungfischer (50.00) bis 14 Jahren</label>
            </li>
            <li>
                <input type="radio" id="junior-fisher" name="membership" value="supporter" required />
                <label for="junior-fisher">Junior (50.00) ab 14 Jahren</label>
            </li>
            <li>
                <input type="radio" id="activ-member" name="membership" value="supporter" required />
                <label for="activ-member">Aktivmitglied (120.00)</label>
            </li>
            <li>
                <input type="radio" id="passive-member" name="membership" value="supporter" required />
                <label for="passive-member">Passivmitglied (50.00)</label>
            </li>
            <li>
                <input type="radio" id="veteran-member" name="membership" value="supporter" required />
                <label for="veteran-member">Veteran (70.00) Aktivmitglied ab 65 Jahren</label>
            </li>
        </ul>
        <div class="inputs">
            <div>
                <label for="firstname">Vorname</label>
                <input type="text" id="firstname" name="vorname" placeholder="Vorname" required />
            </div>

            <div>
                <label for="lastname">Nachname</label>
                <input type="text" id="lastname" name="nachname" placeholder="Nachname" required />
            </div>

            <div>
                <label for="birthday">Geburtsdatum</label>
                <input type="date" id="birthday" name="geburtsdatum" placeholder="Geburtsdatum" required />
            </div>

            <div>
                <label for="street">Strasse und Nummer</label>
                <input type="text" id="street" name="strasse" placeholder="Strasse Nr." required />
            </div>

            <div>
                <label for="plz">PLZ</label>
                <input type="text" id="plz" name="plz" placeholder="PLZ" required />
            </div>

            <div>
                <label for="city">Ort</label>
                <input type="text" id="city" name="ort" placeholder="Ort" required />
            </div>


        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" required />
        </div>
        <div>
            <label for="message">Nachricht</label>
            <textarea id="message" name="message" placeholder="Nachricht"></textarea>
        </div>

        <button type="submit">Absenden</button>

    </form>
</template>
<script lang="ts">
export default {
    name: 'JoinForm',
    
}; 
</script>
<style scoped>
form .inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 0px;
}

form .inputs div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

form ul {
    list-style: none;
    padding: 0;
}

@media (max-width: 700px) {
    form .inputs {
        display: flex;
        flex-direction: column;
    }
}
</style>