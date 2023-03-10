<template>
    <h1>Boot</h1>
    <h2>Reservation</h2>
    <p> Das Vereinsboot darf ausschliesslich von Vereinsmitgliedern gebucht werden. Unbefugte Benutzung durch Drittpersonen
        wird strafrechtlich verfolgt! Mit der Buchung des Vereinsboots akzeptierst du automatisch die Benutzungsordnung,
        bitte lese sie sorgfältig durch! Du kannst sie hier (pdf) herunterladen. </p>

    <p>Eine angefragte Buchung gilt als gültige Reservation, auch ohne Bestätigung.</p>

    <h2>Tarife:</h2>
    <ul>
        <li>
             05:00 - 19:00 Uhr (Tagestarif) CHF 2.00 pro Stunde
        </li>
        <li> 
            19:00 - 05-00 Uhr (Nachttarif) CHF 1.00 pro Stunde
        </li>
    </ul>
    <p>Bei Problemen an den Bootswart Ben wenden. <span>Tel: </span><a href="tel:076 437 50 58">076 437 50 58</a></p>
    
    <div id="zhcal-root" data-id="536b9e39c949c1b171e770be20b62960" data-lang="de"></div>

</template>
<script lang="ts">
export default {
    name: 'BoatView',
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://app.calendarapp.de/loadcal.php';
        script.async = true;
        document.body.appendChild(script);
    }
}
</script>
<style scoped></style>