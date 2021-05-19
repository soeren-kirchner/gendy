The following text will be in German, because the subject of Gendy is the German language.
# gendy
Gendy ist ein Skript für Webseitenbetreiber, die ihren Lesern die Art des Genderns oder Entgendern nach Phettberg/Kronschläger selbst wählen lassen möchten.

![Gendy Live Example](gendy-live-example.gif)

**gendy in reale Publikation eingebunden.**

Online Beispiel: [unerzogen Magazin: "Andere Länder – andere Sitten, Andere Gesetze – andere Bildung"](https://www.unerzogen-magazin.de/artikel/?articleID=849)

# Einbindung
Das Skript wird über 
```html
<script src="gendy.js"></script>
```
in die eigene Seite eingebunden und über die Javascript-Funktion
```js
gendyInit(':')
```
initialisiert. 

Es kann mit jedem anderem Trennzeichen oder mit 'y' initialisiert werden. Dadurch werden alle für das Gendern markierte Wörter vorbereitet und mit dem Trennzeichen versehen. In dem Beispiel werden alle markierten Wörter mit ':' gegendert.

Es empfiehlt sich, dass direkt nach dem Laden der Seite zu erledigen.
```html
<script>
    window.addEventListener('load', (event) => {
        gendyInit(':')
    });
</script>
```

Nachdem die Wörter initialisiert sind kann die aktuelle Variante über
```js
gendySetVariant('<Trennzeichen>')
```
geändert werden.

Im Prinzip kann jedes Trennzeichen verwendet werden. Setzt man das Trennzeichen auf 'y', dann werden die Wörter nach Phettberg entgendert (y-Variante)

Dieses Repository beinhaltet ein Demo, dass die Einbindung und Verwendung demonstriert. 

>gendy-demo.html

# Nutzung

Die einfachste Methode ist ein Wrapper mit der Klasse gendy. Alle klassenlosen `span` Tags innerhalb des Wrappers werden behandelt. `span`'s mit irgendeiner Klasse werden ignoriert. 

```html
<article class="gendy">
    <p>Wir fragen die <span>Lehrer|innen|Lehrys</span> nach dem Sinn.</p>
</article>
```

Alternativ, wenn man keinen Wrapper verwenden möchte/kann, dann kann man dem `span` auch direkt die Klasse `g` zuweisen.
```html
<p>Wir fragen die <span class="g">Lehrer|innen|Lehrys</span> nach dem Sinn.</p>
```

# Aufbau 
Der allgemeine Aufbau ist:

```html
<span>Basis|Anhang|y-Alternative</span>
```
Wird gegendert mit '**\***', '**:**', '**_**' oder '**/**' werden Basis und Anhang mit dem entsprechendem Trennzeichen zusammengesetzt. Prinzipiell kann auch jedes andere Zeichen als Trennzeichen genutzt werden.

Wird Entgendern nach Phettberg gewählt (y-Variante) wir die y-Alternative verwendet.

Ich verwende in den Beispielen ab sofort den Doppelpunkt für die Gendervariante und schreibe die y-Variante immer in Klammern dahinter.

```html
<span>Schüler|in|Schüly</span>
```
wird zu Schüler:in (Schüly)
```html
<span>Lehrer|innen|Lehrys</span>
```
wird zu Lehrer:innen (Lehrys)
```html
<span>Der|Die|Das</span>
```
wird zu Der:Die (Das)
```html
<span>Ein|e|Ein</span>
```
wird zu Ein:e (ein)

## Besonderheiten und Vereinfachungen
Lässt sich das Wort in der y-Variante aus der Basis und der Endung y/ys zusammensetzen, kann man die y-Alternative verkürzen.
```html
<span>Kolleg|in|y</span>
``` 
wird zu Kolleg:in (Kollegy)
```html
<span>Polizist|innen|ys</span>.
``` 
wird zu Polizist:innen (Polizistys)


Möchte man ein Wort (aus welchem Grund auch immer) nicht zum gendern anbieten, aber zum entgendern, lässt man den Anhang einfach weg. Das Trennzeichen wird dann nicht mit ausgegeben.
```html
<p>Kims Vater ist <span>Polizist||y</span>.</p>
```
wird zu: Kims Vater ist Polizist (Kims Vater ist Polizisty) 

# Weitere Beispiele
```html
<span>Der|Die|Das</span> <span>Schüler|in|Schüly</span>
```
Der:Die Schüler:in (Das Schüly)

```html
<span>Ein|e|Ein</span> <span>Editor|in|Edity</span> benutzt einen Editor.
```
Ein:e Editor:in benutzt einen Editor. (Ein Edity benutzt einen Editor.)



