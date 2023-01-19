import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager


class TestLoginRegister(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Edge()

    def test_Login_Positif(self):
        driver = self.driver
        driver.get("https://itera-qa.azurewebsites.net/")  # buka situs
        driver.maximize_window()
        time.sleep(3)
        driver.find_element(
            By.CSS_SELECTOR, "#navbarColor01 > form > ul > li:nth-child(2) > a").click()
        time.sleep(2)
        driver.find_element(By.ID, "Username").send_keys(
            "septiana17")  # isi username
        time.sleep(1)
        driver.find_element(By.ID, "Password").send_keys(
            "anissa1709")  # isi password
        time.sleep(1)
        driver.find_element(
            By.XPATH, "/html/body/div/div[1]/form/table/tbody/tr[7]/td[2]/input[1]").click()
        time.sleep(3)

    def test_Login_Negatif(self):
        driver = self.driver
        driver.get("https://itera-qa.azurewebsites.net/")  # buka situs
        driver.maximize_window()
        time.sleep(3)
        driver.find_element(
            By.CSS_SELECTOR, "#navbarColor01 > form > ul > li:nth-child(2) > a").click()
        time.sleep(2)
        driver.find_element(By.ID, "Username").send_keys(
            "arief17")  # isi username
        time.sleep(1)
        driver.find_element(By.ID, "Password").send_keys(
            "12345678")  # isi password
        time.sleep(1)
        driver.find_element(
            By.XPATH, "/html/body/div/div[1]/form/table/tbody/tr[7]/td[2]/input[1]").click()
        time.sleep(3)

        response_message = driver.find_element(
            By.XPATH, '/html/body/div/div[1]/form/table/tbody/tr[5]/td/label').text
        self.assertEqual(
            response_message, 'Wrong username or password')


unittest.main()
