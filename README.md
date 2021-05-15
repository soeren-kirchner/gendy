The following text will be in German, because the Subject of Gendy is the German language.
# gendy
Gendy ist ein einfaches Skript, das es Webseitenbetreibern ermöglicht, ihren Lesern die Art des Genderns oder Entgendern nach Phettberg/Kronschläger selbst zu wählen.

# Idee


# Einbindung

# Nutzung

Die einfachste Methode ist ein Wrapper mit der Klasse gendy. Alle klassenlosen `span` Tags innerhalb des Wrappers werden behandelt. `span`'s mit irgendeiner Klasse werden ignoriert. 

```html
<article class="gendy">
    <p>Wir fragen die <span>Lehrer|innen|Lehrys</span> nach dem Sinn.</p>
</article>
```

Alternativ, wenn man keinen Wrapper verwenden möchte/kann, dann kann man dem `span` auch direkt die Klasse `g` zuweisen
```html
<p>Wir fragen die <span class="g">Lehrer|innen|Lehrys</span> nach dem Sinn.</p>
```

# Der Aufbau 
Der allgemeine Aufbau ist:

```html
<span>Basis|Anhang|y-Alternative</span>
```
Wird gegendert mit **\*,:,_** oder **/** werden Basis und Anhang mit dem entsprechendem Trennzeichen zusammengesetzt.

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
<span>Polizist|innen|ys</span>.</p>
``` 
wird zu Polizist:innen (Polizistys)


Möchte man ein Wort (aus welchem Grund auch immer) nicht zum gendern anbieten, aber zum entgendern, lässt man den Anhang einfach weg. Das Trennzeichen wird dann nicht mit ausgegeben.
```html
<p>Kims Vater ist <span>Polizist||y</span>.</p>
```
wird zu: Kims Vater ist Polizist (Kims Vater ist Polizisty) 

# weitere Beispiele
```html
<span>Der|Die|Das</span> <span>Schüler|in|Schüly</span>
```
Der:Die Schüler:in (Das Schüly)

```html
<span>Ein|e|Ein</span> <span>Editor|in|Edity</span> benutzt einen Editor.
```
Ein:e Editor:in benutzt einen Editor. (Ein Edity benutzt einen Editor.)



