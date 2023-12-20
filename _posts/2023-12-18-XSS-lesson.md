---
title: XSS Lesson
description: lesson for XSS
layout: post
courses: {'csa': {'week': 15}}
categories: ['C4.0']
type: tangibles
---

# What is XSS?
XSS (Cross Site Scripting) is a security vunerability.

**OCCURS WHEN** an attacker injects malicious scripts into web pages that are viewed by other users.

The scripts can be executed in the context of a user's browser, leading to potential harm:
1. Stealing sensitive information
2. Session hijacking
3. Defacing websites

A term needed to know to understand XSS is **payload**: A "payload" refers to the malicious code or set of instructions that an perpetrator (attacker) delivers to a target system to achieve a specific objective, ex. stealing information from others.
### **Popcorn hack:**
What are two other possible harms of XSS?

# 3 Main Types of XSS:

### **Stored XSS:**
**General Definition**: Occurs when the malicious script is permanently stored on the target server and served to users whenever they access the compromised page.

![image](https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/sorted-XSS.png)

**Steps based on the diagram:**
1. *Perpetrator Discovers Vulnerability:*
    - Description: The attacker, known as the perpetrator, identifies a website that has a security vulnerability, often related to inadequate input validation or output encoding.
    - Objective: The goal is to find a weakness that allows the injection of malicious scripts into the web application.
2. *Injection of Malicious Script:*
    - Description: The perpetrator injects a malicious script into the vulnerable website. This script is designed to execute specific actions when loaded by visitors' browsers.
    - Objective: The injected script is crafted to steal sensitive information, commonly session cookies, from users who visit the compromised page.
3. *Activation of Malicious Script:*
    - Description: Whenever a visitor accesses the perpetrated website, the injected malicious script is activated within their browser.
    - Objective: The script executes in the context of the user's session, enabling the attacker to carry out actions on behalf of the user or extract sensitive information.
4. *Sending Stolen Session Cookies:*
    - Description: The malicious script, now activated during each visitor's session, collects the session cookies of the users.
    - Objective: The stolen session cookies are sent back to the perpetrator, who can then use these cookies to impersonate the users, gaining unauthorized access to their accounts.

**Example:** An attacker discovers that a website allows user-generated content without proper input validation. They inject a script into a comment section, and whenever other users view that comment, the malicious script executes in their browsers, stealing their session cookies. The attacker then uses these stolen session cookies to log in as the compromised users.

### **Reflected XSS:**
**General Definition:** The injected script is part of the user's request and reflected back to the user, often via a crafted link. Unlike a Stored XSS, it doesn't exist on the target server, rather it exists in the malicious link.

![image](https://media.geeksforgeeks.org/wp-content/uploads/20210706191745/tuxpicom1625579254-660x373.jpg)

**Steps based on the diagram:**
1. *Perpetrator Sends Malicious Links:*
    - Description: The attacker, known as the perpetrator, sends crafted and malicious links to potential victims.
    - Objective: The links contain specially crafted payloads, often in the form of parameters in the URL, that exploit vulnerabilities on the targeted website.
2. *User Clicks the Link and Execution in the Browser:*
    - Description: A user receives the malicious link and clicks on it.
    - Objective: The payload embedded in the link is executed within the user's browser, exploiting the vulnerability on the target website.
3. *Browser Sends Private Data to the Attacker:*
    - Description: As a result of the executed payload, the user's browser performs actions on the targeted website, often unintentionally.
    - Objective: The payload may include code that steals sensitive information, such as session cookies or other private data, from the user's session.

**Example:** An attacker discovers a website with a search feature that reflects the user's input in the URL without proper validation. The attacker sends a crafted link to a user, and when the user clicks it, the payload in the URL is reflected back by the website. This payload includes a script that steals the user's session cookie and sends it to the attacker.

### **DOM-based XSS:**
**General Definition**: DOM-based Cross-Site Scripting (DOM-based XSS) is a type of Cross-Site Scripting attack where the vulnerability is located in the Document Object Model (DOM) of a web page. Unlike traditional XSS attacks, where the malicious payload is inserted into the HTML content, DOM-based XSS occurs in the client-side script itself. 

![img](https://www.researchgate.net/publication/348065719/figure/fig7/AS:974893847937024@1609444214143/DOM-based-XSS-Attack-Model.png)

**Steps based on diagram:**
1. *Attacker Crafts a Malicious URL:*
    - Description: The attacker creates a specially crafted URL containing a malicious payload, typically in the fragment part of the URL (e.g., after the # symbol).
    - Objective: The goal is to inject malicious JavaScript code into the victim's browser.
2. *User Opens the Link:*
    - Description: The attacker tricks the user into opening the malicious link, causing the victim's browser to make a request to the targeted website with the malicious payload.
    - Objective: The user's action initiates the process of loading the targeted website.
3. *Website Receives the Request:*
    - Description: The targeted website receives the user's request, including the malicious payload in the URL fragment.
    - Objective: Despite receiving the payload, the website does not directly include it in the response to the user.
4. *Legitimate Script Execution:*
    - Description: The website processes the request and sends a response to the user's browser. The response may include legitimate client-side scripts.
    - Objective: The user's browser executes the legitimate scripts included in the response, causing the page to render as intended.
5. *Execution of Malicious Script:*
    - Description: During the legitimate script execution, the browser processes the malicious payload included in the page, leading to the execution of the attacker's injected script.
    - Objective: The attacker's script is executed in the context of the user's session, allowing it to perform malicious actions, such as stealing sensitive information.
6. *Sensitive Information Sent to Attacker:*
    - Description: The executed malicious script carries out actions, such as stealing user-sensitive information (ex. session cookies), which is then sent to the attacker's server.
    - Objective: The attacker gains unauthorized access to the victim's information, potentially leading to further exploitation.

### **Popcorn Hack:**
Provide an example of DOM-based XSS...

**Example:**
