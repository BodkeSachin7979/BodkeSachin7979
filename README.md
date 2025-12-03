# 🚀 Data Analyst Portfolio | Sachin Bodke

<div align="center">

![GitHub Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Sachin%20Bodke&fontSize=60&fontAlignY=35&animation=fadeIn)

**Data Analyst | Python Developer | SQL Specialist | Power BI Expert**

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://bodkesachin7979.github.io/Sachin_Portfolio/)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sachinbodke/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sachinbodke7979@gmail.com)
[![GitHub](https://img.shields.io/badge/💻_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BodkeSachin7979)

</div>

## 📊 Professional Summary

> *Transforming raw data into actionable insights through advanced analytics, visualization, and automation*

Detail-driven Data Analyst with foundational skills in SQL, Python (Pandas), Power BI, and EDA. Proficient in data cleaning, visualization, and reporting, with a strong interest in delivering data-driven insights to inform business decisions
---

## 🛠 Technical Stack

### **Data Analysis & Visualization**
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org/)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=python&logoColor=white)](https://matplotlib.org/)
[![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://seaborn.pydata.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org/)
[![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/)

### **Machine Learning & Statistics**
[![Scikit-Learn](https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![StatsModels](https://img.shields.io/badge/StatsModels-8C4C94?style=for-the-badge&logo=python&logoColor=white)](https://www.statsmodels.org/)

### **Databases & SQL**
[![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)](https://en.wikipedia.org/wiki/SQL)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)

### **Business Intelligence & Visualization Tools**
[![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://powerbi.microsoft.com/)
[![Tableau](https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white)](https://www.tableau.com/)
[![Excel](https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)](https://www.microsoft.com/en-us/microsoft-365/excel)

### **Development & Tools**
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

---

## 🎯 Featured Projects

### 📊 **Netflix Data Analysis** | SQL Analytics
*Comprehensive analytical case study using advanced SQL techniques*
```sql
-- Example: Advanced window functions and CTEs
WITH ranked_content AS (
    SELECT 
        title,
        type,
        release_year,
        RANK() OVER (PARTITION BY type ORDER BY release_year DESC) as recency_rank
    FROM netflix_titles
)
SELECT * FROM ranked_content WHERE recency_rank <= 5;
```
**🔧 Technologies:** PostgreSQL, Window Functions, CTEs, String Parsing  
**📈 Insights:** Content trends, release patterns, genre analysis

---

### 📈 **Sales Analytics Dashboard** | Power BI
*Interactive sales reporting with comprehensive business metrics*
- **DAX Measures & KPIs**: Revenue growth, YoY comparison, regional performance
- **Interactive Features**: Drill-down capabilities, slicers, filters
- **Visual Analytics**: Geographic mapping, trend analysis, performance indicators

**🛠 Tools:** Power BI, DAX, Data Modeling  
**📊 Output:** Executive dashboards, sales performance reports

---

### 🔍 **Retail Customer EDA** | Python Pandas
*Comprehensive exploratory data analysis for customer segmentation*
```python
# Customer segmentation analysis
customer_segments = df.groupby('segment').agg({
    'purchase_amount': ['mean', 'count', 'sum'],
    'frequency': 'mean'
}).round(2)
```
**📋 Analysis:** Data cleaning, outlier detection, behavioral patterns  
**🔬 Techniques:** Statistical analysis, clustering, correlation studies

---

## 🧪 Development Projects

### 🤖 **Face Recognition System**
- Real-time face detection and recognition
- FaceNet model implementation
- Live video processing capabilities

### 🏥 **Liver Cancer Prediction App**
- Machine learning classification model
- Flask web application deployment
- Medical data processing and analysis

### 🗺 **Tourister Guide**
- Google Maps API integration
- Location-based services
- Interactive travel planning

---

## 📈 GitHub Analytics

<div align="center">

### 🏆 Achievement Trophies
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=BodkeSachin7979&theme=radical&no-frame=true&column=6&margin-w=15&margin-h=15)

### 📊 Activity Metrics
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=BodkeSachin7979&show_icons=true&theme=radical&hide_border=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=BodkeSachin7979&layout=compact&theme=radical&hide_border=true)

### 🔄 Contribution Graph
![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=BodkeSachin7979&theme=react-dark&hide_border=true&area=true)

### 🐍 Contribution Snake
![](https://github.com/BodkeSachin7979/BodkeSachin7979/blob/output/github-contribution-grid-snake.svg)

</div>

---

## 🎯 Current Focus Areas

<div align="center">

| Domain | Skills in Progress |
|--------|-------------------|
| **📊 Advanced SQL** | Window Functions, Query Optimization, Performance Tuning |
| **📈 Power BI** | Advanced DAX, Dashboard Design, Data Modeling |
| **🤖 Python Automation** | Scripting, Workflow Automation, ETL Pipelines |
| **🌐 Flask APIs** | RESTful Services, Data Applications, Deployment |

</div>

## 📋 Repository Structure
```
BodkeSachin7979/
│
├── 📊 Data-Analytics/
│   ├── Netflix-Data-Analysis-Project
│   ├── Sales-Data-Analysis-Power-BI
│   └── Customer-Shopping-Trends-Analysis
│
├── 🤖 Machine-Learning/
│   ├── Face-Recognition-Attendance-System
│   └── Liver-Cancer-Prediction
│
├── 🌐 Web-Applications/
│   ├── Tourister-Guide
│   └── Sachin_Portfolio
│
├── 📚 Learning-Practice/
│   ├── SQL-Practice
│   └── Python-Programming
│
└── 🔧 Utilities-Templates/
    ├── (Future: Data processing templates)
    └── (Future: Analysis boilerplates)
```
---
## 📬 Let's Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Visit_Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white&labelColor=000000)](https://bodkesachin7979.github.io/Sachin_Portfolio/)
[![LinkedIn](https://img.shields.io/badge/💼_Connect_on_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0077B5)](https://www.linkedin.com/in/sachinbodke/)
[![Email](https://img.shields.io/badge/📧_sachinbodke7979@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&labelColor=D14836)](mailto:sachinbodke7979@gmail.com)
[![GitHub](https://img.shields.io/badge/💻_Follow_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)](https://github.com/BodkeSachin7979)
</div>

<div align="center">

### ⚡ **Turning Data into Decisions** ⚡

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)

</div>

---
