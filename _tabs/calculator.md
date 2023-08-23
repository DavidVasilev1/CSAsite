---
layout: page
icon: fas fa-circle
order: 2
---
<style>
    .calc {
        border: 2px solid #333;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        background-color: #000000;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    #input {
        width: 100%;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
        background-color: #414141;
    }
    .buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-top: 10px;
    }
    button {
        padding: 10px;
        font-size: 16px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .storage {
        border: 2px solid #333;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        background-color: #000000;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<div class="calc">
    <input type="text" id="input" disabled>
    <div class="buttons">
        <button onclick="appendToType('7')">7</button>
        <button onclick="appendToType('8')">8</button>
        <button onclick="appendToType('9')">9</button>
        <button onclick="appendToType('/')">/</button>
        
        <button onclick="appendToType('4')">4</button>
        <button onclick="appendToType('5')">5</button>
        <button onclick="appendToType('6')">6</button>
        <button onclick="appendToType('*')">*</button>
        
        <button onclick="appendToType('1')">1</button>
        <button onclick="appendToType('2')">2</button>
        <button onclick="appendToType('3')">3</button>
        <button onclick="appendToType('-')">-</button>
        
        <button onclick="appendToType('0')">0</button>
        <button onclick="clearText()">AC</button>
        <button onclick="calculate()">=</button>
        <button onclick="appendToType('+')">+</button>
    </div>
</div>
<br>
<p style="text-align: center">Stored Data</p>
<div id="storage" class="storage">
    
</div>

<button onclick="clearSaves()">Clear Data</button>

<script src="../assets/js/pages/calculator.js"></script>
