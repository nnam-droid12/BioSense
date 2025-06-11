# parse_xml_csv.py
import os
import xml.etree.ElementTree as ET
import pandas as pd

def parse_csv(file_path: str) -> list[dict]:
    df = pd.read_csv(file_path)
    return df.to_dict(orient="records")

def parse_xml(file_path: str) -> list[dict]:
    tree = ET.parse(file_path)
    root = tree.getroot()
    return [{child.tag: child.text for child in elem} for elem in root]
