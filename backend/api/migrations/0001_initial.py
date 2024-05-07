# Generated by Django 4.2.11 on 2024-05-07 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adv_no', models.CharField(max_length=200)),
                ('post_name', models.CharField(max_length=500)),
                ('link_post_name', models.CharField(max_length=500)),
                ('category_name', models.CharField(max_length=200)),
                ('state_ut', models.CharField(max_length=100)),
                ('sub_category_name', models.CharField(blank=True, max_length=200, null=True)),
                ('post_date', models.DateField(blank=True, null=True)),
                ('short_desc', models.TextField()),
                ('total_vacancy', models.IntegerField(blank=True, null=True)),
                ('gen_fees', models.CharField(blank=True, max_length=100, null=True)),
                ('others_fees', models.CharField(blank=True, max_length=100, null=True)),
                ('ph_fees', models.CharField(blank=True, max_length=100, null=True)),
                ('app_begin_date', models.DateField()),
                ('app_last_date', models.DateField()),
                ('app_last_fees_date', models.DateField(blank=True, null=True)),
                ('exam_date', models.DateField(blank=True, null=True)),
                ('prelim_exam_date', models.DateField(blank=True, null=True)),
                ('main_exam_date', models.DateField(blank=True, null=True)),
                ('interview_exam_date', models.DateField(blank=True, null=True)),
                ('result_exam_date', models.DateField(blank=True, null=True)),
                ('general_vacancy', models.IntegerField(blank=True, null=True)),
                ('obc_vacancy', models.IntegerField(blank=True, null=True)),
                ('sc_vacancy', models.IntegerField(blank=True, null=True)),
                ('st_vacancy', models.IntegerField(blank=True, null=True)),
                ('net_category_vacancy', models.IntegerField(blank=True, null=True)),
                ('age_info', models.CharField(blank=True, max_length=200, null=True)),
                ('min_age', models.IntegerField(blank=True, null=True)),
                ('relaxation', models.IntegerField(blank=True, null=True)),
                ('education', models.CharField(blank=True, max_length=500, null=True)),
                ('detail_desc', models.TextField(blank=True, null=True)),
                ('apply_online', models.CharField(blank=True, max_length=100, null=True)),
                ('official_website', models.CharField(blank=True, max_length=100, null=True)),
                ('app_notifications', models.CharField(blank=True, max_length=100, null=True)),
                ('medical_std', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
