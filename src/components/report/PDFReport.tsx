import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';

// 스타일 정의
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica', // 기본 폰트 사용
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    borderBottom: '2px solid #086D35',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#086D35',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#086D35',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    padding: 16,
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#086D35',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 11, // 폰트 크기 조정으로 가독성 향상
    color: '#333333',
    lineHeight: 1.4,
    marginBottom: 8,
  },
  highlight: {
    fontSize: 11,
    color: '#086D35',
    fontWeight: 'bold',
  },
  chartPlaceholder: {
    width: '100%',
    height: 120, // 높이 조정으로 공간 효율성 향상
    backgroundColor: '#f9fafb',
    border: '1px dashed #e5e7eb',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  chartText: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1px solid #e5e7eb',
    fontSize: 9,
    color: '#666666',
  },
  keywordTag: {
    backgroundColor: '#0db659',
    color: '#ffffff',
    padding: '3px 6px',
    borderRadius: 4,
    fontSize: 9,
    marginRight: 4,
    marginBottom: 4,
  },
  keywordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  // 데이터 표시를 위한 추가 스타일
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dataLabel: {
    fontSize: 11,
    color: '#666666',
    fontWeight: 'normal',
  },
  dataValue: {
    fontSize: 11,
    color: '#086D35',
    fontWeight: 'bold',
  },
});

interface PDFReportProps {
  reportData: any;
}

const PDFReport: React.FC<PDFReportProps> = ({ reportData }) => {
  const formatNumber = (num: number) => {
    return num?.toLocaleString() || 'N/A';
  };

  const formatPercent = (num: number) => {
    return num ? `${num.toFixed(1)}%` : 'N/A';
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.title}>지역 분석 리포트</Text>
          <Text style={styles.subtitle}>
            {new Date().toLocaleDateString('ko-KR')}
          </Text>
          <Text style={styles.location}>
            {reportData?.district || 'N/A'} {reportData?.sub_neighborhood || 'N/A'}
          </Text>
          <Text style={styles.subtitle}>
            {reportData?.primary || 'N/A'} - {reportData?.secondary || 'N/A'}
          </Text>
        </View>

        {/* 지역 요약 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>지역 요약</Text>
          <Text style={styles.content}>
            {reportData?.description_summary?.total_description || 'N/A'}
          </Text>
        </View>

        {/* 인구 분석 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>인구 분석</Text>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>총 인구:</Text>
            <Text style={styles.dataValue}>{formatNumber(reportData?.population?.total_resident)}명</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>남성:</Text>
            <Text style={styles.dataValue}>{formatPercent(reportData?.population?.gender?.percent?.male_percent)}</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>여성:</Text>
            <Text style={styles.dataValue}>{formatPercent(reportData?.population?.gender?.percent?.female_percent)}</Text>
          </View>
          <Text style={styles.content}>
            {reportData?.population?.description_population?.age || 'N/A'}
          </Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>연령대별 인구 분포 차트</Text>
          </View>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>성별 인구 비율 차트</Text>
          </View>
        </View>

        {/* 부동산 가격 분석 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>부동산 가격 분석</Text>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>평당 가격:</Text>
            <Text style={styles.dataValue}>{formatNumber(reportData?.price?.price_per_pyeong)}원</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>m²당 가격:</Text>
            <Text style={styles.dataValue}>{formatNumber(reportData?.price?.price_per_meter)}원</Text>
          </View>
          <Text style={styles.content}>
            {reportData?.price?.description_price?.value_average || 'N/A'}
          </Text>
        </View>

        {/* 소득 및 소비 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>소득 및 소비 분석</Text>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>월 평균 소득:</Text>
            <Text style={styles.dataValue}>{formatNumber(reportData?.income_consumption?.income?.monthly_income_average)}원</Text>
          </View>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>소득 분포 차트</Text>
          </View>
        </View>

        {/* 키워드 분석 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>키워드 분석</Text>
          <View style={styles.keywordContainer}>
            {reportData?.keywords?.map((keyword: any, index: number) => (
              <Text key={index} style={styles.keywordTag}>
                {keyword.platform}: {keyword.keywords?.slice(0, 2).join(', ')}
              </Text>
            )) || <Text style={styles.content}>키워드 정보가 없습니다.</Text>}
          </View>
          {reportData?.keywords?.map((keyword: any, index: number) => (
            <Text key={index} style={styles.content}>
              <Text style={styles.highlight}>{keyword.platform}:</Text> {keyword.descript}
            </Text>
          ))}
        </View>

        {/* 전략 제안 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>전략 제안</Text>
          <Text style={styles.content}>
            {reportData?.strategy || '데이터 분석을 통한 전략적 인사이트를 제공합니다.'}
          </Text>
        </View>

        {/* 푸터 */}
        <View style={styles.footer}>
          <Text>© 2024 지역 분석 서비스. 모든 권리 보유.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport; 